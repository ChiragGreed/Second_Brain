import { useState } from 'react';
import '../Style/auth.scss';
import useAuth from '../../Hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const logomark = (
  <svg viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const { registerHandler } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerHandler({ ...formData });
    navigate('/inbox');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo__mark">{logomark}</div>
          <span className="auth-logo__name">Second Brain</span>
        </div>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Start building your personal knowledge base.</p>

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
            <label className="auth-label" htmlFor="email">Email</label>
            <input
              className="auth-input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
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

          <button type="submit" className="auth-btn">Create account →</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
