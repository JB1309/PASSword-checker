import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    if (password.length < 6) {
      return 'Too short';
    } else if (password.length < 10) {
      return 'Weak';
    } else if (!/[0-9]/.test(password) || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      return 'Moderate';
    } else {
      return 'Strong';
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>Password Strength: <strong>{strength}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;
