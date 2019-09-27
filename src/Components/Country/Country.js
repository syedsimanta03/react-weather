import React from 'react';
import './Country.css';

import ca from '../../img/pic-1.jpg';
import sun from '../../img/sun-icon.svg';
import ru from '../../img/pic-2.jpg';
import snow from '../../img/snow-icon.svg';

const Country = props => {
  let currentTemp = 0;

  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === 'F') {
      currentTemp = fahrenheit;
    } else {
      currentTemp = celsius;
    }
  }

  return (
    <section className="item">
      <div className='floater'>
        <div className='icon-temp'>
          {props.cities && props.cities.name === 'Tangail' ? (
            <img src={sun} alt='Icon' />
          ) : (
            <img src={snow} alt='Icon' />
          )}
          <p id='temp'>{props.cities ? currentTemp : ''}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ''}</p>
      </div>
      {props.cities && props.cities.name === 'Tangail' ? (
        <img src={ca} alt='Tangail' id='country-img' />
      ) : (
        <img src={ru} alt='Moscow' id='country-img' />
      )}
      <div className='country'>
        {props.cities && props.cities.name === 'Tangail' ? (
          <div>
            <p>{props.cities.name}</p>
            <p>BANGLADESH</p>
          </div>
        ) : (
          <div>
            <p>Moscow</p>
            <p>RUSSIA</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Country;
