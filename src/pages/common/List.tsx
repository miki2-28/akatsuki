import axios from 'axios';
import React from 'react';
import Template from '.././common/Template';

const List: React.FC = () => {
  const data = async () => {
    try {
      const result = await axios('/api/getNovels');
      console.log(result.data.data);
      return result.data.data;
    } catch (error) {
      return error;
    }
  };

  console.log(data);
  return <Template menuOn={true}></Template>;
};

export default List;
