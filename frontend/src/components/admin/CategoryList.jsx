import { useEffect, useState } from 'react';
import { getCategories, deleteCategory } from '../../services/categoriaService';
import CategoryForm from './CategoryForm';

const CategoryList = () => {
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCategories()
      .then(res => setCategorias(res.data))
      .catch(err => console.error('Error al obtener categorías', err));
  }, [refresh]);

  const handleEdit = (categoria) => {
    setSelected(categoria);
  };

  const handleDelete = async (id) => {
    if (confirm('¿Seguro que deseas eliminar esta categoría?')) {
      try {
        await deleteCategory(id);
        setRefresh(!refresh);
      } catch {
        alert('Error al eliminar la categoría');
      }
    }
  };

  const handleFormSuccess = () => {
    setSelected(null);
    setRefresh(!refresh);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Categorías</h3>
        <ul className="list-group">
          {categorias.map(cat => (
            <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
              {cat.name}
              <div>
                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(cat)}>Editar</button>
                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(cat.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-6">
        <h3>{selected ? 'Editar Categoría' : 'Nueva Categoría'}</h3>
        <CategoryForm initialData={selected} onSuccess={handleFormSuccess} />
      </div>
    </div>
  );
};

export default CategoryList;
