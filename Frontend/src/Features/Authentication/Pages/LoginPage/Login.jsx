import { useState } from 'react';
import '../Style/auth.scss';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const logomark = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { loginHandler } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginHandler({ ...formData });
    navigate('/inbox');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo__mark">{logomark}</div>
          <span className="auth-logo__name">Second Brain</span>
        </div>

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to access your knowledge base.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="username">Username</label>
            <input
              className="auth-input"
              id="username"
              name="username"
              type="text"
              placeholder="your_username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="password">Password</label>
            <input
              className="auth-input"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Sign in →</button>
        </form>

        <div className="auth-footer">
          <p>No account?</p>
          <Link to="/register">Create one</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
