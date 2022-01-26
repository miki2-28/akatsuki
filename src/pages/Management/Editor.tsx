import { Alert, Button, Divider, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import style from '../../styles/Management.module.css';
import Auth from '../common/Auth';
import Template from '../common/Template';

const Editor: React.FC<{
  defaultTitle?: string;
  defaultContent?: string;
  defaultSummary?: string;
  defaultItemId?: number;
}> = ({ defaultTitle, defaultContent, defaultSummary, defaultItemId }) => {
  const [title, setTitle] = useState(defaultTitle || '');
  const [content, setContent] = useState(defaultContent || '');
  const [summary, setSummary] = useState(defaultSummary || '');
  const [itemId, setItemId] = useState(defaultItemId || undefined);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(false);
  const [count, setCount] = useState(defaultContent?.length || 0);
  const router = useRouter();

  const save = async () => {
    const body = { title: title, summary: summary, content: content, count: count };
    try {
      const res = await axios.post('/api/createNovels', body);
      return router.push({ pathname: '/Management/', query: { title: res.data.title } });
    } catch (error) {
      setMessage('失敗したー');
      return;
    }
  };

  if (preview) {
    if (!title || !content) {
      setMessage('なんか入れて！');
      setPreview(false);
    } else {
      if (message) setMessage('');
    }
    return (
      <Template menuOn={false} title={'プレビュー'}>
        <Auth>
          <div>タイトル</div>
          <div>{title}</div>
          <Divider />
          <div>本文</div>
          <div>{content}</div>
          <Button variant="contained" color="secondary" onClick={() => setPreview(false)}>
            編集に戻る
          </Button>
          <Button variant="contained" color="primary" onClick={() => save()}>
            保存
          </Button>
          <Button variant="contained" color="primary" onClick={() => setPreview(false)}>
            投稿
          </Button>
        </Auth>
      </Template>
    );
  }

  const pageTitle = title && content ? '新規登録' : '編集';

  return (
    <Template menuOn={false} title={pageTitle}>
      <Auth>
        {message && <Alert severity="error">{message}</Alert>}
        <div className={style.editor}>
          <TextField
            id="title"
            label="タイトル"
            variant="filled"
            defaultValue={title}
            onChange={(event) => setTitle(event.target.value)}
            className={style.text}
          />
          <TextField
            id="summary"
            label="概要"
            variant="filled"
            multiline
            onChange={(event) => setSummary(event.target.value)}
            defaultValue={summary}
            minRows={10}
            className={style.text}
          />{' '}
          <TextField
            id="content"
            label="本文"
            variant="filled"
            multiline
            onChange={(event) => {
              setContent(event.target.value);
              setCount(event.target.value.length);
            }}
            defaultValue={content}
            minRows={30}
            className={style.text}
          />
          <Button variant="contained" color="primary" onClick={() => setPreview(true)}>
            プレビュー
          </Button>
        </div>
      </Auth>
    </Template>
  );
};

export default Editor;
