// import { Novels } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { createNovels } from 'src/graphql/mutations';

Amplify.configure(awsmobile);

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, summary, content, count } = req.body;

  const event = await API.graphql(
    graphqlOperation(createNovels, {
      input: { title: title, summary: summary, content: content, count: count },
    }),
  );

  console.log(event);

  res.json(event);
};

export default handleCreate;
