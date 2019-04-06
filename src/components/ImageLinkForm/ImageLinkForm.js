import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
   return (
    <div>
        <p className='f3'>
            {'This Magic Brain Will Detect Faces in Your Pictures. Give it a Try!'}
        </p>
        <div className='Center'>
            <div className='form Center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex'  onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                onClick={onButtonSubmit}
                >Detect</button>
            </div>
        </div>
    </div>
   );
}

export default ImageLinkForm;