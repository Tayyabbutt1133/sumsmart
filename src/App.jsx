import './App.css'
import Demo from './components/Demo'
import Footer from './components/footer'
import Hero from './components/hero'


function App() {

  return (
    <main>
      <div className='main'>
       <div className='gradient'/>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        <Footer/>
      </div>

   </main>
  )
}

export default App
