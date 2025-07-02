import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4 text-center" style={{ maxWidth: '600px' }}>
        <h1 className="mb-3 text-primary">Gestor de Productos y Categorías</h1>

        <p className="lead text-muted">
          Esta aplicación te permite administrar de manera sencilla tus productos y categorías. 
          Puedes crear, editar y eliminar registros, todo desde un panel intuitivo y seguro con autenticación por JWT.
        </p>

        <div className="mt-4">
          <Link className="btn btn-success me-2" to="/login">Iniciar Sesión</Link>
          <Link className="btn btn-outline-primary" to="/register">Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
