import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout, getUserFromToken } from '../services/authService';
import { useEffect, useState } from 'react';
import { FaChartBar } from 'react-icons/fa'; // ✅ ícono de gráfico

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

  const handleAdminClick = () => {
    if (isAuthenticated()) {
      navigate('/dashboard');
    } else {
      alert('⚠️ Debes iniciar sesión primero para acceder al panel de administración');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Gestor de Productos y Categorías</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <button
          className="btn btn-outline-warning me-3 d-flex align-items-center"
          onClick={handleAdminClick}
        >
          <FaChartBar className="me-2" />
          Admin
        </button>

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
