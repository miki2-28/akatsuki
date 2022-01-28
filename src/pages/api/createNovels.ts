import { Novels } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { prisma } from './prisma';

// const handleCreate = async (req: NextApiRequest, res: NextApiResponse<Novels>) => {
//   const { title, summary, content, count } = req.body;

//   const newNovel = await prisma.novels.create({
//     data: { title, summary, content, count },
//   });

//   res.json(newNovel);
// };

// export default handleCreate;

