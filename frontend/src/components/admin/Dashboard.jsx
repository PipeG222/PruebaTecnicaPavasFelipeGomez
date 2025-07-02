import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productoService';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error cargando productos', err));
  }, []);

  // Agrupar productos por categoría
  const productosPorCategoria = productos.reduce((acc, prod) => {
    const categoria = prod.categoria?.name || 'Sin categoría';
    acc[categoria] = (acc[categoria] || 0) + 1;
    return acc;
  }, {});

  const categorias = Object.keys(productosPorCategoria);
  const cantidades = Object.values(productosPorCategoria);

  // Productos ordenados por precio
  const productosOrdenados = [...productos]
    .sort((a, b) => b.price - a.price)
    .slice(0, 10); // solo los 10 más caros

  const nombres = productosOrdenados.map(p => p.name);
  const precios = productosOrdenados.map(p => p.price);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Panel de Administración</h2>

      <div className="row g-4 mb-5">
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

      <h4 className="mb-3">Resumen Visual</h4>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Productos por Categoría</h5>
              <Bar
                data={{
                  labels: categorias,
                  datasets: [{
                    label: 'Cantidad de productos',
                    data: cantidades,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)'
                  }]
                }}
                options={{ responsive: true, plugins: { legend: { display: false } } }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Top 10 Productos más Caros</h5>
              <Bar
                data={{
                  labels: nombres,
                  datasets: [{
                    label: 'Precio ($)',
                    data: precios,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)'
                  }]
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: { display: true, text: 'Precio ($)' }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
