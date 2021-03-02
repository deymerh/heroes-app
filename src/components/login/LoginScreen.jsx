import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  let history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastpath') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: 'Deymer',
      }
    })
    history.replace(lastPath)
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  );
};
