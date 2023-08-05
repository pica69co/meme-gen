// import html2canvas from 'html2canvas';
import Footer from './Footer';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import 'bootstrap'
import { useState } from 'react';
import Help from './Help';
// Helper function for escaping not allowed Character in the URL for the api call
function escapingCharacters(item) {
  if (item === ' ') {
    return '_';
  } else if (item === '_') {
    return '__';
  } else if (item === '-') {
    return '--';
  } else if (item === '?') {
    return '~q';
  } else if (item === '&') {
    return '~a';
  } else if (item === '%') {
    return '~p';
  } else if (item === '#') {
    return '~h';
  } else if (item === '/') {
    return '~s';
  } else if (item === '\\') {
    return '~b';
  } else if (item === '"') {
    return "''";
  } else {
    return item;
  }
}

// Helper function to download the created meme
function download(downloadUrl, fileText, event) {
  fetch(downloadUrl.split('.').slice(0, 3).join('.') + '.png', {
    method: 'GET',
    headers: {},
  })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileText + '.png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    })
    .catch((err) => {
      console.log(err);
    });

  //**use html2canvas
    // alert('Do you like download this meme?')
    // html2canvas(document.querySelector("#capture"))
    //   .then( canvas => {
    //   const img = canvas.toDataURL("image/png")
    //   const link = document.createElement("a")
    //   link.download = 'meme.png'
    //   link.href = img
    //   link.click()
    //   })
 }





export default function InputFields(props) {
    const [modal, setModal] = useState(false)

    const restart = ()=>{
     window.location.reload(true)
    
  }

    const handlerChooseMeme = ()=>{
    props.memeUrl ? alert('Something went wrong! try again...') : 
    props.setOverlayHidden(false)

  }
  
  const handleModal = () => {
    setModal(!modal)
  }

  const modalStyles = {
    position: "fixed",
    zIndex:"10",
    margin: "auto",
    background:"#fff", 
    top: "1.25%",
    left: "10.60%",
    borderRadius:"5px",
    boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)",
        
  }

  return (
    <div className="inputFields">
      <Button 
      style={
        {
          width:'fit-content',
          height:'fit-content',
          marginLeft:'85%',
          fontWeight:'bold',
          padding:'13px'
        }
    } 
      onClick={handleModal}
      >?</Button> 
      <div>
        <label htmlFor="topText">Top Text</label>
        <input
          id="topText"
          type="text"
          onChange={({ target }) => {
            const urlText = target.value
              .split('')
              .map((item) => escapingCharacters(item));
            props.setTopText(urlText.join(''));
          }}
        />
      </div>
      <div>
        <label htmlFor="bottomText">Bottom Text</label>
        <input
          id="bottomText"
          type="text"
          onChange={({ target }) => {
            const urlText = target.value
              .split('')
              .map((item) => escapingCharacters(item));
            props.setBottomText(urlText.join(''));
          }}
        />
      </div>
      
      <button onClick={handlerChooseMeme }>Choose Meme</button>
      <button
        onClick={() =>
          props.setMemeUrl(
            `https://api.memegen.link/images/${props.chosenMeme}/${props.topText}/${props.bottomText}.jpg?width=450&height=450`,
          )
        }
      >
        Create Meme
      </button>
      <button onClick={() => download(props.memeUrl, props.chosenMeme)}>
        Download
      </button>
      <button onClick={restart}>
        New meme
      </button>
      <Modal isOpen={modal} style={modalStyles}>
        <ModalHeader style={
            { textAlign:'center',
              fontSize:'1.5rem',
            }
        }>
            Help
        </ModalHeader>

        <ModalBody style={
            {
              justifyContent:'center', 
              textAlign:'justify',
              padding:'1.5px',
              marginLeft:'5px'  
            }
        }>
            <Help/>
        </ModalBody>

        <ModalFooter style={
                        {margin:'30px 100px 0px 115px'}
                    }>
            <Button
            style={{width:'fit-content'}}
            onClick={handleModal}
            >Close</Button>
        </ModalFooter>
    </Modal>
      <Footer />
    </div>
  );
}
