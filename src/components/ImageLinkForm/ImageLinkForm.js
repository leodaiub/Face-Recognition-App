import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = () => {
   return (
    <div>
        <p className='f3'>
            {'This Magic Brain Will Detect Faces in Your Pictures. Give it a Try!'}
        </p>
        <div className='Center'>
            <div className='form Center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex'/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
            </div>
        </div>
    </div>
   );
}

export default ImageLinkForm;