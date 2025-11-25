import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import api from '../../api/axios';
import storeAuth from '../../context/storeAuth';
import dino from '../../assets/dino.jpg';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken, setRol } = storeAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/admin/login', formData);
      if (response.data.token) {
        setToken(response.data.token);
        setRol(response.data.admin.rol);
        toast.success(response.data.msg);
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const backendUrl =
      import.meta.env.VITE_API_URL ||
      'https://backend-zayen.onrender.com/api';

    window.location.href = `${backendUrl}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4 overflow-hidden">

      {/* Fondo con blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: `url(${dino})` }}
      ></div>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Tarjeta login */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold text-teal-800 mb-2">
            MUSEO GUSTAVO ORCÉS
          </h1>
          <p className="text-gray-600">Sistema de Gestión</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Botón Login */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-800 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" />
                <span>Iniciando sesión...</span>
              </>
            ) : (
              <span>Iniciar Sesión</span>
            )}
          </button>
        </form>

        {/* Recuperar contraseña */}
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-teal-800 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">O</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-sm"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            Continuar con Google
          </span>
        </button>

        {/* 🔵 BOTÓN PARA REGRESAR AL HOME */}
        <button
          onClick={() => navigate('/')}
          className="w-full mt-4 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          REGRESAR
        </button>

        {/* Info */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-xs text-gray-500">
            <strong>Administradores:</strong> Usa correo y contraseña.
          </p>
          <p className="text-xs text-gray-500">
            <strong>Pasantes:</strong> Ingresa mediante Google.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
