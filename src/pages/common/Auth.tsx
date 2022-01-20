import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@mui/material';
import { auth } from 'src/firebase/config';

const Auth: React.FC = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <CircularProgress />;

  if (user?.uid === process.env.NEXT_PUBLIC_MANAGER_ID) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <Alert severity="error">許可されてないよ！</Alert>;
};

export default Auth;
