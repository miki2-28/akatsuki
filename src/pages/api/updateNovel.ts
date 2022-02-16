import { NextApiRequest, NextApiResponse } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { updateArtworks } from 'src/graphql/mutations';
import { UpdateArtworksInput } from 'src/API';

const handleUpdateNovel = async (req: NextApiRequest, res: NextApiResponse) => {
  const updateNovelsInput: UpdateArtworksInput = {
    id: req.body.id,
    title: req.body.title,
    summary: req.body.summary,
    content: req.body.content,
    count: req.body.count,
    category: 'novel',
  };
  const event = await API.graphql(
    graphqlOperation(updateArtworks, {
      input: updateNovelsInput,
    }),
  );

  res.json(event);
};

export default handleUpdateNovel;
