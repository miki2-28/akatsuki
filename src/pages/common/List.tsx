import { TableContainer, TableRow } from '@material-ui/core';
import { Link, Paper, Table, TableBody, TableCell, TableHead } from '@mui/material';
import React from 'react';
import { useGetNovels } from 'src/hooks/useGetNovels';
import { formatDate } from 'src/util/util';

const List: React.FC<{ onClick: (id: string) => void }> = ({ onClick }) => {
  const { list } = useGetNovels();

  return (
    <div>
      <TableContainer component={Paper} sx={{ width: '80%', background: 'transparent' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>タイトル</TableCell>
              <TableCell>概要</TableCell>
              <TableCell>文字数</TableCell>
              <TableCell>追加日</TableCell>
              <TableCell>更新日</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list?.items.map((l) => {
              return (
                <TableRow key={l?.id}>
                  <TableCell>
                    <Link onClick={() => onClick(l?.id || '')}>{l?.title}</Link>
                  </TableCell>
                  <TableCell>{l?.summary}</TableCell>
                  <TableCell>{l?.count}</TableCell>
                  <TableCell>{formatDate(new Date(l?.createdAt || ''), 'yyyy/MM/dd')}</TableCell>
                  <TableCell>{formatDate(new Date(l?.updatedAt || ''), 'yyyy/MM/dd')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
