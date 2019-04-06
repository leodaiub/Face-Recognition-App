import React, { Component } from 'react';
import './App.css';
import Navigation from  './components/Navigation/Navigation.js';
import FaceRecognition from  './components/FaceRecognition/FaceRecognition.js';
import Logo from  './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from  './components/Rank/Rank';
import Particles from 'react-particles-js';
const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'd4e7564e829f41b79d04060b513962d0'});

const particlesOptions ={
  particles: {
      number: {
          value: 250,
          density: {
            enable: true,
            value_area: 1000
       }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
    "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles  className='particles'  params={particlesOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm  
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
