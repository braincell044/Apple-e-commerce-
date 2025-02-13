import React, { useState } from 'react';
import Slide from './images/Rectangle 31.png';
import Slidetwo from './images/Rectangle 32.png';
import Slidethree from './images/Rectangle 33.png';
import Slidefour from './images/Rectangle 34.png';
import Slidefive from './images/Rectangle 35.png';
import Slidesix from './images/Rectangle 30.png';
import Polygon from './images/Polygon 4.png';
import PolygonTwo from './images/Polygon 5.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Coursel = () => {
  const products = [
    { id: 1, image: Slide, price: "$120", name: 'iphone' },
    { id: 2, image: Slidetwo, price: "$250", name: 'ipod' },
    { id: 3, image: Slidethree, price: "$520", name: 'case' },
    { id: 4, image: Slidefour, price: "$720", name: 'iwatch' },
    { id: 5, image: Slidefive, price: "$310", name: 'ipad' },
    { id: 6, image: Slidesix, price: "$1020", name: 'iphone' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProducts = products.slice(currentIndex, currentIndex + 4);

  const goToNext = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const goToPrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <div>
      <div className='container text-center d-flex slide-flex px-5 py-5'>
        {currentProducts.map((product) => (
          <div key={product.id} className='w-25 px-5'>
            <img src={product.image} alt={product.name} />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className='slide-mars'>
        <img src={PolygonTwo} alt='polygon' onClick={goToPrev} className='mx-5 my-5' />
        <img src={Polygon} alt='polygon' onClick={goToNext} className='mx-5 my-5' />
      </div>
    </div>
  );
};

export default Coursel;