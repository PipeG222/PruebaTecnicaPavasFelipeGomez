import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const res = await login(form.email, form.password);
    if (res.success) {
      navigate('/dashboard');
    } else {
      setError(res.error || 'Credenciales inválidas');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3 text-primary">Iniciar Sesión</h3>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="ejemplo@correo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>

        <div className="mt-3 text-center">
          <small className="text-muted">¿No tienes cuenta? Regístrate desde la barra superior.</small>
        </div>
      </div>
    </div>
  );
};

export default Login;
