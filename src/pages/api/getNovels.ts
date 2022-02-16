import { NextApiRequest, NextApiResponse } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { listArtworkss } from 'src/graphql/queries';

const handleGetNovels = async (req: NextApiRequest, res: NextApiResponse) => {
  const filter = req.body.filter;
  const result = await API.graphql(graphqlOperation(listArtworkss, { filter: filter }));

  res.json(result);
};

export default handleGetNovels;
