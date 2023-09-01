import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import first from '../assets/first.json';
import second from '../assets/second.json';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
    this.value = Math.floor(Math.random() * 2) + 1;
  }

  render() {
    return (
      <Player
        className='pt-6'
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.5}
        src={this.value === 2 ? first : second}
        style={{ height: '50%', width: '50%' }}
      ></Player>
    );
  }
}

export default Loader;
