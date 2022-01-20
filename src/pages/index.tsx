import React from 'react';
import Link from 'next/link';
import Template from './common/Template';

const Home: React.FC = () => {
  return (
    <Template menuOn={false}>
      <div>ようこそー</div>
      <Link href="/Home">Homeへ</Link>
    </Template>
  );
};

export default Home;
