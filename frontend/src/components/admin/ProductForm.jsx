import { useEffect, useState } from 'react';
import { getCategories } from '../../services/categoriaService';
import { createProduct, updateProduct } from '../../services/productoService';

const ProductForm = ({ initialData, onSuccess }) => {
  const [form, setForm] = useState({ name: '', description: '', price: '', category_id: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
  }, []);

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        description: initialData.description,
        price: initialData.price,
        category_id: initialData.category_id
      });
      setSuccess('');
    } else {
      setForm({ name: '', description: '', price: '', category_id: '' });
      setSuccess('');
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!form.description.trim()) newErrors.description = 'La descripción es obligatoria';
    if (!form.price || isNaN(form.price) || form.price <= 0) newErrors.price = 'Precio inválido';
    if (!form.category_id) newErrors.category_id = 'Selecciona una categoría';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccess('');

    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    try {
      if (initialData) {
        await updateProduct(initialData.id, form);
        setSuccess('Producto actualizado correctamente');
      } else {
        await createProduct(form);
        setSuccess('Producto creado correctamente');
        setForm({ name: '', description: '', price: '', category_id: '' });
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      setErrors({ general: 'Error al guardar el producto' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.general && <div className="alert alert-danger">{errors.general}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <div className="mb-3">
        <label className="form-label">Nombre del producto</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          rows="3"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        ></textarea>
        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className={`form-control ${errors.price ? 'is-invalid' : ''}`}
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        <small className="form-text text-muted">El precio debe ser mayor que cero.</small>
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
          value={form.category_id}
          onChange={e => setForm({ ...form, category_id: e.target.value })}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category_id && <div className="invalid-feedback">{errors.category_id}</div>}
      </div>

      <button type="submit" className="btn btn-primary">
        {initialData ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
};

export default ProductForm;
