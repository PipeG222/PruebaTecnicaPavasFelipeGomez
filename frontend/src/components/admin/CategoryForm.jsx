import { useState, useEffect } from 'react';
import { createCategory, updateCategory } from '../../services/categoriaService';

const CategoryForm = ({ initialData, onSuccess }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setSuccess('');
      setError('');
    } else {
      setName('');
      setSuccess('');
      setError('');
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) {
      setError('El nombre es obligatorio');
      return;
    }

    try {
      if (initialData) {
        await updateCategory(initialData.id, { name });
        setSuccess('Categoría actualizada correctamente');
      } else {
        await createCategory({ name });
        setSuccess('Categoría creada correctamente');
        setName('');
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al guardar la categoría');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="mb-3">
        <label className="form-label">Nombre de la categoría</label>
        <input
          type="text"
          className={`form-control ${error ? 'is-invalid' : ''}`}
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <div className="form-text">Por ejemplo: Electrónica, Ropa, Bebidas</div>
      </div>

      <button type="submit" className="btn btn-primary">
        {initialData ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
};

export default CategoryForm;
