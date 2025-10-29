import { Container } from '@mui/material';
import clsx from 'clsx';

import styles from './home.module.css';
import HomepageSignInLink from './ui/homepage-sign-in-link';

export default function Home() {


  return (
    <div className={clsx(
      styles.home,
      'flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black')}>
      <Container>
        <HomepageSignInLink />
      </Container>
    </div>
  );
}
