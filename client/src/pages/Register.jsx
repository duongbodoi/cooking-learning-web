import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ChefHat, Mail, Lock } from 'lucide-react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    const success = register(email, password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-secondary/20 flex items-center justify-center p-4 font-sans">
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 border border-primary/10">
        <div className="flex flex-col items-center mb-6">
          <Link to="/" className="text-primary hover:scale-110 transition-transform">
            <ChefHat size={48} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join our community of home cooks</p>
        </div>

        {error && <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm mb-4 border border-red-100">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-gray-50 focus:bg-white"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-gray-50 focus:bg-white"
                placeholder="•••••• (min 6 chars)"
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
