import React, { useState } from 'react';

const Foro = () => {
  // 1. Estados para el Registro
  const [estaRegistrado, setEstaRegistrado] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ nombre: '', email: '', password: '' });

  // 2. Estados para el Foro (Mensajes)
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      nombre: 'Camilo Rodríguez',
      ciudad: 'Ibagué',
      mensaje: '¡Subir al Cañón del Combeima en bicicleta fue una experiencia inolvidable! Recomiendo madrugar.',
      fecha: 'Hace 2 días'
    },
    {
      id: 2,
      nombre: 'Mariana Duarte',
      ciudad: 'Bogotá',
      mensaje: 'Fui el fin de semana a la Represa de Prado, el paisaje es impresionante. Totalmente recomendado el paseo en lancha.',
      fecha: 'Ayer'
    }
  ]);

  // Manejador del formulario de registro
  const handleRegistro = (e) => {
    e.preventDefault();
    if (datosUsuario.nombre && datosUsuario.email && datosUsuario.password) {
      setEstaRegistrado(true); // Cambia el estado para mostrar el foro
    }
  };

  // Manejador del formulario del foro
  const handlePublicar = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    const nuevoComentario = {
      id: Date.now(),
      nombre: datosUsuario.nombre, // Usa el nombre registrado
      ciudad: ciudad.trim() || 'Tolima',
      mensaje,
      fecha: 'Hace un momento'
    };

    setComentarios([nuevoComentario, ...comentarios]);
    setCiudad('');
    setMensaje('');
  };

  return (
    <section className="page">
      <h2>Comunidad de Viajeros: ¡Únete a Nosotros!</h2>
      <p>
        Sé parte de la red de exploradores de la <strong>Tierra Firme</strong>. Comparte tus recomendaciones y planifica tu próxima aventura por el departamento.
      </p>

      {/* RENDERIZADO CONDICIONAL: Si NO está registrado, muestra el registro. Si SÍ, muestra el foro */}
      {!estaRegistrado ? (
        
        <div className="tarjeta-noticia" style={{ marginTop: '24px', padding: '24px', maxWidth: '500px', margin: '24px auto' }}>
          <h3 style={{ color: '#641126', marginBottom: '16px', textAlign: 'center' }}>Crea tu cuenta de viajero</h3>
          
          <form onSubmit={handleRegistro} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="text"
              placeholder="Nombre completo o Apodo"
              value={datosUsuario.nombre}
              onChange={(e) => setDatosUsuario({...datosUsuario, nombre: e.target.value})}
              required
              style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={datosUsuario.email}
              onChange={(e) => setDatosUsuario({...datosUsuario, email: e.target.value})}
              required
              style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={datosUsuario.password}
              onChange={(e) => setDatosUsuario({...datosUsuario, password: e.target.value})}
              required
              style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
            />
            
            <button
              type="submit"
              className="nav-btn"
              style={{ backgroundColor: '#641126', color: '#eab308', borderColor: '#641126', fontWeight: 'bold', marginTop: '8px' }}
            >
              Registrarme
            </button>
          </form>
        </div>

      ) : (
        
        <div style={{ marginTop: '24px' }}>
          {/* Mensaje de bienvenida personalizado */}
          <div style={{ backgroundColor: '#eab308', color: '#641126', padding: '12px 20px', borderRadius: '6px', marginBottom: '24px', fontWeight: 'bold' }}>
            ¡Bienvenido/a a la comunidad, {datosUsuario.nombre}!
          </div>

          <div className="tarjeta-noticia" style={{ padding: '20px' }}>
            <h3 style={{ color: '#641126', marginBottom: '14px' }}>Comparte tu experiencia</h3>
            
            <form onSubmit={handlePublicar} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="¿De dónde nos visitas? (Ej. Ibagué, Melgar...)"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
              />
              <textarea
                placeholder="Escribe tu mensaje, anécdota o recomendación..."
                rows="3"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #d1d5db', resize: 'vertical' }}
              />
              <button
                type="submit"
                className="nav-btn"
                style={{ alignSelf: 'flex-start', backgroundColor: '#641126', color: '#eab308', borderColor: '#641126', fontWeight: 'bold' }}
              >
                Publicar en el Foro
              </button>
            </form>
          </div>

          {/* Lista de comentarios */}
          <div style={{ marginTop: '32px' }}>
            <h3 style={{ color: '#c29000', marginBottom: '16px' }}>Últimas publicaciones de la comunidad</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {comentarios.map((item) => (
                <div key={item.id} style={{ backgroundColor: '#fdfbf7', borderLeft: '5px solid #eab308', borderRadius: '6px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ color: '#641126', fontSize: '1.05rem' }}>
                      {item.nombre} <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 'normal' }}>({item.ciudad})</span>
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{item.fecha}</span>
                  </div>
                  <p style={{ margin: 0, color: '#374151', fontSize: '0.95rem' }}>{item.mensaje}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Foro;