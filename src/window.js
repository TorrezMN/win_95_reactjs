import React, { useState } from 'react';

import Draggable from "react-draggable";
import './ventana_styles.css';

function Ventana(){
  const [count, setCount] = useState(0);

  return(
      <Draggable>
        <div className='window'>
          <div className='window_header'>
            <div className='title'>
              <p>Clicker!</p>
            </div>
            <div className='header_buttons'>
              <button className='header_button' type='button'>-</button>
              <button className='header_button' type='button'>&#9633;</button>
              <button className='header_button' type='button'>x</button>
            </div>
          </div>
          <div className='window_content'>
            <p>You clicked {count} times</p>
            <div className='content_buttons'>
              <button className='content_button' onClick={() => setCount(count + 1)}>
              ok
              </button>
              <button className='content_button' onClick={() => setCount(count - 1)}>
              cancel
              </button>
            </div>
          </div>
        </div>
      </Draggable>
  )
}


export default Ventana;
