import { Alert, Button, CircularProgress } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import Template from '../common/Template';
import { auth } from 'src/firebase/config';

const Top: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  const provider = new TwitterAuthProvider();
  const router = useRouter();

  if (loading) {
    return (
      <Template menuOn={false}>
        <CircularProgress />
      </Template>
    );
  }

  if (user?.uid === process.env.NEXT_PUBLIC_MANAGER_ID) {
    return (
      <Template menuOn={false}>
        {router.query && <Alert severity="success">{router.query.title} を更新したよ</Alert>}
        <div>
          <Link href="/Management/Editor">新規登録</Link>
        </div>
        <div>
          <Link href="/Management/List">編集</Link>
        </div>
        <Button variant="contained" color="primary" onClick={() => signOut(auth)}>
          Sign Out
        </Button>
      </Template>
    );
  }
  return (
    <Template menuOn={false} title="管理者向け">
      {error && <Alert severity="error">{error.message}</Alert>}
      <Button variant="contained" color="primary" onClick={() => signInWithPopup(auth, provider)}>
        Sign In
      </Button>
    </Template>
  );
};
export default Top;
