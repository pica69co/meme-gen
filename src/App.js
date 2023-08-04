import { useState } from 'react'
import html2canvas from 'html2canvas'
import './App.css';
import { memesData } from './dataImages';

function App() {
  const [headline, setHeadline] = useState('')
  const [footerline, setFooterline] = useState('')
  const [image, setImage] = useState('')

  console.log('memes: ',memesData);

  const headlineHandler = (event) => {
    setHeadline(event.target.value)
  }

  const footerlineHandler = (event) => {
    setFooterline(event.target.value)
  }

  const imageHandler = (event) => {
    setImage(event.target.value)
  }

  const btnHandler = (event) => {
    alert('Download this meme?... ')
    html2canvas(document.querySelector("#capture")).then(canvas=>{
      const img = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.download = 'meme.png'
      link.href = img
      link.click()
    })
  }
  
  return (
    <div className="App">
      
      {/* Select picker from memes */}
      <select onChange={imageHandler}
        placeholder='select meme'
        style={{
          margin: '10px 7px', 
          padding:'3px', 
          fontWeight:'bolder',
        }}
      >
        <option value='Two-Buttons'>Two-Buttons</option>
        <option value='Futurama'>Futurama</option>
        <option value='history' >History Channel</option>
        <option value='matrix' >Arnold</option>
        <option value='raptor' >Philo</option>
        <option value='smartguy' >Smart Guy</option>
        <option value='meme' >D' Caprio</option>
      </select>
      <br/>
      <input 
        type="text"
        onChange={headlineHandler} 
        placeholder="head line" />
      <div style={{padding:'5px'}}></div>
      <input 
        type="text" 
        onChange={footerlineHandler} 
        placeholder="footer line" />
      <br/>
      <div ></div>
      { (headline &&  footerline) ? 
        <button 
      style={{padding:'2px', margin:'7px'}}
      onClick={btnHandler} >Download</button>
        : <span 
        style={{color:'red', fontSize:'15px', padding:'2px', marginTop:'17px'}}
        >fill all items to continue</span>
    }
      <div 
         
        style={{
        width: 'fit-content',
        maxWidth:'50%',
        background:'#000',
        margin:'auto'
        }}>
       <span
        style={{
          position: 'absolute',
          left: 0,
          marginTop: 20,
          width: '100%',          
          color: 'white',
          fontSize: '30px',
          textShadow: '2px 0 0 #000',    
          textAlign: "center"}}
        >{headline}</span>
         
        
        <span
        style={{
          position: 'absolute',
          left: 0,
          marginTop: 420,
          width: '100%',          
          color: 'white',
          fontSize: '30px',
          textShadow: '2px 0 0 #000',    
          textAlign: "center"}}
        >{footerline}</span>
        <img 
          src={`assets/img/${image}.jpg`} 
          alt={image}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default App;
