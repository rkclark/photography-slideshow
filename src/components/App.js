import React from 'react';
import images from '../config/images.json';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <img src={images[this.state.imageIndex].src} alt="Curent slide" />
      </div>
    );
  }
}
