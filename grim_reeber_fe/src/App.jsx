import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('userInfo')) || null
  );
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
  };

  if (userInfo) {
    return (
      <div style={{ textAlign: 'center', marginTop: 40, fontFamily: 'system-ui, sans-serif' }}>
        <h2>Welcome, {userInfo.name}</h2>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      {showRegister ? (
        <Register onRegisterSuccess={setUserInfo} />
      ) : (
        <Login onLoginSuccess={setUserInfo} />
      )}
      <p style={{ textAlign: 'center' }}>
        <button onClick={() => setShowRegister(!showRegister)}>
          {showRegister ? 'Already have an account? Log in' : "Don't have an account? Register"}
        </button>
      </p>
    </div>
  );
}

export default App;