import { useRouter } from 'next/router';
import React from 'react';
import List from '../common/List';
import Template from '../common/Template';

const NovelsList: React.FC = () => {
  const router = useRouter();

  const onClick = (id: string) => router.push({ pathname: '/Management/Editor', query: { id: id } });
  return (
    <Template menuOn={false} title="編集">
      <List onClick={onClick} />
    </Template>
  );
};

export default NovelsList;
