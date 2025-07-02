import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout, getUserFromToken } from '../services/authService';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      const user = getUserFromToken();
      setUsuario(user);
    } else {
      setUsuario(null);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUsuario(null);
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Gestor de Productos y Categorías</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        {usuario ? (
          <>
            <span className="navbar-text text-white me-3">
              Hola, {usuario.nombre}
            </span>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
            <Link className="btn btn-primary" to="/register">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
