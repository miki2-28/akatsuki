import { NextApiRequest, NextApiResponse } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { listArtworkss } from 'src/graphql/queries';

const handleGetNovels = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await API.graphql(graphqlOperation(listArtworkss));

  console.log(result);

  res.json(result);
};

export default handleGetNovels;
