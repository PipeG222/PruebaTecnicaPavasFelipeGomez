import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Panel de Administración</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Categorías</h5>
              <p className="card-text">Crear, editar o eliminar categorías.</p>
              <Link to="/admin/categorias" className="btn btn-primary">Administrar Categorías</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Productos</h5>
              <p className="card-text">Gestiona productos y su relación con categorías.</p>
              <Link to="/admin/productos" className="btn btn-success">Administrar Productos</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
