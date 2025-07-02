const API = import.meta.env.VITE_API_URL;

// Obtener token del localStorage
export const getToken = () => localStorage.getItem('token');

// Guardar token
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Borrar token (logout)
export const logout = () => {
  localStorage.removeItem('token');
};

// Verificar si hay sesión activa
export const isAuthenticated = () => {
  const token = getToken();
  return !!token; // true si existe
};

// Obtener usuario desde token decodificado
export const getUserFromToken = () => {
  try {
    const token = getToken();
    if (!token) return null;

    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));
    return decoded;
  } catch (err) {
    console.error('Token inválido', err);
    return null;
  }
};

// Helper: cabeceras con autorización
export const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
  'Content-Type': 'application/json',
});

// Login: envía email y password, guarda token
export const login = async (email, password) => {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (res.ok) {
    setToken(data.token);
    return { success: true, usuario: data.usuario };
  } else {
    return { success: false, error: data.error };
  }
};

// Registro: envía nombre, email, password
export const register = async (nombre, email, password) => {
  const res = await fetch(`${API}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, password })
  });

  const data = await res.json();

  return res.ok
    ? { success: true }
    : { success: false, error: data.error || 'Error al registrar' };
};
