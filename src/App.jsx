import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import ButtonChat from './components/ButtonChat';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-30 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
      <ButtonChat />
    </BrowserRouter>
  )
}

export default App
