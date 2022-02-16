import { NextApiRequest, NextApiResponse } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { getArtworks } from 'src/graphql/queries';

const handleGetNovel = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.body.id;
  const result = await API.graphql(graphqlOperation(getArtworks, { id: id }));

  res.json(result);
};

export default handleGetNovel;
