import React from 'react';
import { Carousel } from 'rsuite';
import styles from './Styles.module.scss';

const listItems = [
  'Pisos con porcelanato',
  'Muros de hormigón visto',
  'Ventanas de aluminio Termopanel',
  'Cocina incorporada equipada con encimera, horno y campana',
  'Cubiertas de cuarzo',
  'Cerámica rectificada en baños y cocina',
  'Instalación para lavadora y agua caliente individual con termo eléctrico',
  'Ducha baño principal con mampara de vidrio',
  'Baños con mueble vanitorio',
];

const Characteristics = () => {
  return (
    <div id='caracteristicas'>
      <div className={styles.characteristics}>
        <div className={styles.car}>
          <Carousel shape='bar' autoplay>
            <img src='/galery/6.png' />
            <img src='/galery/5.png' />
            <img src='/galery/3.png' />
            <img src='/galery/1.png' />
            <img src='/galery/2.png' />
            <img src='/galery/4.png' />
          </Carousel>
        </div>
        <div className={styles.contentText}>
          <span>Características</span>
          <h2>Exclusividad y Diseño</h2>
          <p>
            Una distribución única de espacios con modernas terminaciones y calidad en cada detalle, con un diseño que
            permite disfrutar de cada espacio por su funcionalidad y armonía.
          </p>
          <br />
          <p>
            Enamórate de una terraza única, amplia y cómoda, diseñada para compartir en familia y disfrutar de la vida.
          </p>
          <br />
          <ul>
            {listItems.map((text, index) => (
              <li key={index}>
                <span>+</span> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
