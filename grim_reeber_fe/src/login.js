import React, { useState } from 'react';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
    boxSizing: 'border-box',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(15, 23, 42, 0.76)',
    border: '1px solid rgba(148, 163, 184, 0.22)',
    borderRadius: '20px',
    boxShadow: '0 20px 45px rgba(15, 23, 42, 0.45)',
    padding: '32px 28px',
    backdropFilter: 'blur(10px)',
  },
  title: {
    margin: '0 0 8px',
    fontSize: '2rem',
    color: '#f8fafc',
    textAlign: 'center',
  },
  subtitle: {
    margin: '0 0 24px',
    textAlign: 'center',
    color: '#cbd5e1',
    fontSize: '0.95rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.85rem',
    color: '#e2e8f0',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    border: '1px solid rgba(148, 163, 184, 0.35)',
    borderRadius: '12px',
    background: 'rgba(15, 23, 42, 0.8)',
    color: '#f8fafc',
    padding: '14px 16px',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
  },
  optionsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    fontSize: '0.85rem',
    color: '#cbd5e1',
  },
  checkboxWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  checkbox: {
    accentColor: '#38bdf8',
    width: '16px',
    height: '16px',
  },
  link: {
    color: '#7dd3fc',
    textDecoration: 'none',
    fontWeight: '600',
  },
  button: {
    marginTop: '8px',
    border: 'none',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)',
    color: '#eff6ff',
    fontSize: '1rem',
    fontWeight: '700',
    padding: '14px 16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 10px 20px rgba(37, 99, 235, 0.25)',
  },
  footer: {
    marginTop: '22px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#cbd5e1',
  },
};

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.subtitle}>Sign in to continue to your account</p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={styles.input}
              autoComplete="email"
            />
          </div>

          <div style={styles.field}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={styles.input}
              autoComplete="current-password"
            />
          </div>

          <div style={styles.optionsRow}>
            <label style={styles.checkboxWrap}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Remember me
            </label>

            <a href="#" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>

        <div style={styles.footer}>
          Dont have an account? <a href="#" style={styles.link}>Create one</a>
        </div>
      </div>
    </div>
  );
}
