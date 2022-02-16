import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { GetArtworksQuery, ListArtworkssQuery } from 'src/API';

export const useGetNovels = () => {
  const [list, setList] = useState<ListArtworkssQuery['listArtworkss']>();

  const fetchData = useCallback(async () => {
    try {
      const result = await axios('/api/getNovels');
      setList(result.data.data.listArtworkss);
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => void fetchData(), []);

  return { list, fetchData };
};

export const useGetNovel = (id: string) => {
  const [novel, setNovel] = useState<GetArtworksQuery['getArtworks']>();

  const fetchData = useCallback(async () => {
    if (id) {
      const body = { id: id };
      try {
        const result = await axios.post('/api/getNovel', body);
        setNovel(result.data.data.getArtworks);
      } catch (error) {
        return error;
      }
    }
  }, []);

  useEffect(() => void fetchData(), []);

  return { novel, fetchData };
};
