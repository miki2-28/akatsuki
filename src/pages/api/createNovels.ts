import { NextApiRequest, NextApiResponse } from 'next';
import { API, graphqlOperation } from 'aws-amplify';

import { createArtworks } from 'src/graphql/mutations';
import { CreateArtworksInput } from 'src/API';

const handleCreateNovel = async (req: NextApiRequest, res: NextApiResponse) => {
  const createNovelsInput: CreateArtworksInput = {
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    count: req.body.count,
    category: 'novel',
  };
  const event = await API.graphql(
    graphqlOperation(createArtworks, {
      input: createNovelsInput,
    }),
  );

  console.log(event);

  res.json(event);
};

export default handleCreateNovel;
