import React, { useState } from 'react';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    // simulate a signup process
    localStorage.setItem('isSignedUp', true);
    setIsSignedUp(true);
    alert(`Welcome ${firstName} ${lastName}! You have successfully signed up with email ${email}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('isSignedUp');
    setIsSignedUp(false);
  };

  return (
    <div>
      {isSignedUp ? (
        <>
          <p>Welcome {firstName} {lastName}! You are already signed up.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default SignupForm;
