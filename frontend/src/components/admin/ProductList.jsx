import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../services/productoService';
import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    getProducts()
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error cargando productos', err));
  }, [refresh]);

  const handleEdit = (producto) => {
    setSelected(producto);
  };

  const handleDelete = async (id) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      await deleteProduct(id);
      setRefresh(!refresh);
    }
  };

  const handleFormSuccess = () => {
    setSelected(null);
    setRefresh(!refresh);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Productos</h3>
        <ul className="list-group">
          {productos.map(prod => (
            <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{prod.name}</strong> — {prod.categoria?.name || 'Sin categoría'}
              </div>
              <div>
                <button
                  className="btn btn-sm btn-outline-info me-2"
                  onClick={() => setShowDetail(prod)}
                >
                  Detalles
                </button>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => handleEdit(prod)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(prod.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-6">
        <h3>{selected ? 'Editar Producto' : 'Nuevo Producto'}</h3>
        <ProductForm initialData={selected} onSuccess={handleFormSuccess} />
      </div>

      {showDetail && (
        <ProductDetail
          producto={showDetail}
          onClose={() => setShowDetail(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
