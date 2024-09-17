import React, { useState } from 'react';
import axios from 'axios';
import cv from '../cv';
import { motion } from 'framer-motion'

const ButtonChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'system', content: 'Hola, ¿en qué puedo ayudarte respecto a mi CV?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    
    const userMessage = { role: 'user', content: input };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);
    console.log(import.meta.env.VITE_API_KEY);
    
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: "system",
            content: `Este es el CV del usuario: ${JSON.stringify(cv)}. Por favor, responde las preguntas en base a esta información. Siempre se optimista respecto a la respuesta. Si no puedes responder con esta información, indica al usuario que se ponga en contacto por correo.`
          },
          ...messages,
          userMessage
        ],
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      });

      const botMessage = response.data.choices[0].message;
      setMessages([...messages, userMessage, botMessage]); 
    } catch (error) {
      console.error('Error al consultar la API:', error);
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <div className='relative'>
      {isChatOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className='fixed bottom-0 right-0 w-full max-w-sm bg-black-1000 p-6 rounded-t-2xl shadow-lg z-50'
        >
          <button
            onClick={toggleChat}
            className='absolute top-2 right-2 text-white text-2xl'
          >
            &times;
          </button>
          <p className='text-secondary font-medium'>
            ¿Tienes algo para decir?
          </p>
          <h3 className='text-white text-3xl font-bold'>
            Chat con Juan GPT
          </h3>

          <div className='mt-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    msg.role === 'user' ? 'bg-blue-500 text-right text-white' : 'bg-gray-700 text-left text-white'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && <p className='text-white'>Cargando...</p>}
            </div>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>
                Escribe tu mensaje
              </span>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta sobre mi CV..."
                className='bg-gray-800 py-2 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              onClick={handleSendMessage}
              className='bg-blue-500 py-2 px-4 outline-none w-full text-white font-bold shadow-md rounded-lg'
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </motion.div>
      ) : 
        <button
            onClick={toggleChat}
            className='fixed bottom-4 right-4 bg-[#915eff] text-white p-4 rounded-full shadow-lg z-50'
        >
        💬
        </button>
    }
    </div>
  );
};

export default ButtonChat;
