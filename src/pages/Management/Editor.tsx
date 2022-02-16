import { Alert, Button, Checkbox, Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import style from '../../styles/Management.module.css';
import Auth from '../common/Auth';
import Template from '../common/Template';
import { useGetNovel } from 'src/hooks/useGetNovels';

const Editor: React.FC = () => {
  const router = useRouter();
  const { novel } = useGetNovel(String(router.query.id) || '');
  const [title, setTitle] = useState(novel?.title || '');
  const [content, setContent] = useState(novel?.content || '');
  const [summary, setSummary] = useState(novel?.summary || '');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemId, setItemId] = useState(router.query.id || undefined);
  const [published, setPublished] = useState(Boolean(router.query.published) || false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState(false);
  const [count, setCount] = useState(novel?.content?.length || 0);

  useEffect(() => {
    if (novel) {
      setTitle(novel.title);
      setContent(novel?.content || '');
      setSummary(novel.summary);
      setCount(novel?.count || 0);
      setPublished(novel?.published);
    }
  }, [novel]);

  const update = async () => {
    const body = { id: itemId, title: title, summary: summary, content: content, count: count, published: published };
    try {
      const res = await axios.post('/api/updateNovel', body);
      console.log(res);
      return router.push({ pathname: '/Management', query: { title: res.data.data.updateArtworks.title } });
    } catch (error) {
      setMessage('失敗したー');
      return;
    }
  };

  const create = async () => {
    const body = { title: title, summary: summary, content: content, count: count, published: published };
    try {
      const res = await axios.post('/api/createNovel', body);
      return router.push({ pathname: '/Management', query: { title: res.data.data.createArtWorks.title } });
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
          <div className={style.editor}>
            <div style={{ fontSize: 'x-large' }}>タイトル</div>
            <div>{title}</div>
            <Divider sx={{ margin: '20px auto', width: '80%' }} />
            <div style={{ fontSize: 'x-large' }}>概要</div>
            <div>{summary}</div>
            <Divider sx={{ margin: '20px auto', width: '80%' }} />
            <div style={{ fontSize: 'x-large' }}>本文</div>
            <div>{content}</div>
            <div style={{ marginTop: 20 }}>
              <Checkbox size="medium" defaultChecked={published} onClick={() => setPublished(!published)} />
              公開する
            </div>
            <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
              <Button variant="contained" color="secondary" onClick={() => setPreview(false)}>
                編集に戻る
              </Button>
              <Button variant="contained" color="primary" onClick={() => (itemId ? update() : create())}>
                保存
              </Button>
            </div>
          </div>
        </Auth>
      </Template>
    );
  }

  const pageTitle = itemId ? '編集' : '新規登録';

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
          />
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
          <div style={{ display: 'flex', gap: 20, marginTop: 20 }}>
            <Button variant="contained" color="primary" onClick={() => setPreview(true)}>
              プレビュー
            </Button>
            <Button variant="contained" color="secondary" onClick={() => router.push({ pathname: '/Management/' })}>
              戻る
            </Button>
          </div>
        </div>
      </Auth>
    </Template>
  );
};

export default Editor;
