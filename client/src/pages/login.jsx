import { useContext } from 'react';
import { Redirect } from 'react-router-dom' 

import LoginForm from '../components/LoginForm';
import { UserContext } from '../context/User';

export default function LoginPage() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Redirect to="/profile" />;
  } else {
    // TODO: Add more content to complete login view
    return <LoginForm />;
  }
}
