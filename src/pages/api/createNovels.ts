// import { Novels } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { queryRds } from 'src/graphql/queries';

Amplify.configure(awsmobile);

const handleCreate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, summary, content, count } = req.body;
  const event = await API.graphql(
    graphqlOperation(queryRds, {
      query: `insert into Novels (content, count, summary,title) values ('${content}', '${count}', '${summary}', '${title}')`,
    }),
  );

  console.log(event);

  res.json(event);
};

// import { prisma } from './prisma';

// const handleCreate = async (req: NextApiRequest, res: NextApiResponse<Novels>) => {
//   const { title, summary, content, count } = req.body;

//   const newNovel = await prisma.novels.create({
//     data: { title, summary, content, count },
//   });

//   res.json(newNovel);
// };

export default handleCreate;
