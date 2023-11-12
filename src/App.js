import React from 'react';
import Slider from './components/Slider';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';

const App = () => {
  const images = [
    image4,image2,image6,image3,image1,image5,
  ];

  return (
    <div>
      <center><h1>Tp2 React</h1></center>
      <Slider images={images} />
    </div>
  );
};

export default App;

