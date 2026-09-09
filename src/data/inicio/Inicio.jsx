import React, { useState, useEffect } from 'react';

// IMPORTANTE: Ajusta esta ruta dependiendo de dónde esté exactamente tu carpeta 'inicio'
// Si tu archivo Inicio.jsx está en src/data/inicio/, la ruta para subir a 'components' sería así:
import imgIncendio from '../../components/imagenes/img_3999.jpg';
import imgEstadio from '../../components/imagenes/images.jpg';

const Inicio = () => {
  // Estado para guardar la hora exacta en la que el usuario entra
  const [horaCarga, setHoraCarga] = useState('--:--:--');

  // useEffect se ejecuta una sola vez cuando el componente aparece en pantalla
  useEffect(() => {
    const ahora = new Date();
    setHoraCarga(ahora.toLocaleTimeString());
  }, []);

  return (
    <section className="page">
      <h2>Bienvenidos a la Tierra Firme</h2>
      <p>
        El Tolima no es solo un destino, es un sentimiento que se lleva en el alma con orgullo <strong>vinotinto y oro</strong>. Nuestra región es un tapiz vibrante donde la majestuosidad de las montañas se funde con la alegría de nuestro folclor. Somos una tierra de gente berraca y trabajadora, de paisajes que te roban el aliento y de una riqueza cultural que resuena en cada acorde de un sanjuanero. ¡Descubrir el Tolima es enamorarse de la esencia misma de Colombia!
      </p>

      <h3>Lugares Emblemáticos</h3>
      <ul>
        {/* En React, los estilos en línea llevan doble llave y se escriben en camelCase */}
        <li style={{ marginBottom: '8px', marginLeft: '20px' }}>
          <strong>Nevado del Tolima y Cañón del Combeima:</strong> Un paraíso absoluto para los amantes del ecoturismo.
        </li>
        <li style={{ marginBottom: '8px', marginLeft: '20px' }}>
          <strong>Represa de Prado:</strong> Conocida como el "Mar Interior de Colombia".
        </li>
        <li style={{ marginBottom: '8px', marginLeft: '20px' }}>
          <strong>Estadio Manuel Murillo Toro:</strong> El corazón deportivo de Ibagué.
        </li>
        <li style={{ marginBottom: '8px', marginLeft: '20px' }}>
          <strong>Centro Histórico de Honda:</strong> La "Ciudad de los Puentes".
        </li>
      </ul>

      {/* Sección de Noticias */}
      <div className="noticias-tolima">
        <h3>Últimas Noticias del Departamento</h3>
        <div className="contenedor-noticias">
          
          {/* Noticia 1 */}
          <div className="tarjeta-noticia">
            {/* Las imágenes en React se pasan como variables en el src */}
            <img src={imgIncendio} alt="Incendio forestal" className="img-noticia" />
            <h4>Alerta por Incendios Forestales</h4>
            <p>Los cuerpos de bomberos trabajan arduamente para controlar los recientes focos de incendio generados por la temporada seca.</p>
          </div>

          {/* Noticia 2 */}
          <div className="tarjeta-noticia">
            <img src={imgEstadio} alt="Estadio de fútbol" className="img-noticia" />
            <h4>Expectativa en el Murillo Toro</h4>
            <p>La afición vinotinto y oro se prepara para el próximo encuentro buscando consolidar su estrategia en casa.</p>
          </div>

        </div>
      </div>

      {/* Hora de carga inyectada dinámicamente */}
      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#6b7280', textAlign: 'right' }}>
        Hora de inicio de tu exploración: <span>{horaCarga}</span>
      </p>
    </section>
  );
};

export default Inicio;