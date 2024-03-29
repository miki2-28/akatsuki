import React, { createContext, FC, useContext, useMemo } from 'react';
import useMedia from 'use-media';

type Props = {
  children: React.ReactNode;
};

// アプリケーション全体で共有する値の定義
type Context = {
  // モバイルか？
  isMobileSite: boolean;
  // PCか？
  isPcSite: boolean;
};

// Contextの生成
// デフォルトはPCとする。
const MediaQueryContext = createContext<Context>({
  isMobileSite: false,
  isPcSite: true,
});

// 各デバイスでのサイズを定義
const mediaQueries = {
  mobile: '(max-width: 960px)',
  pc: '(min-width: 960px)',
};

export const MediaQueryProvider: FC<Props> = ({ children }: Props) => {
  const isMobileSite = useMedia(mediaQueries.mobile);
  const isPcSite = useMedia(mediaQueries.pc);
  const value = useMemo(() => ({ isMobileSite, isPcSite }), [isMobileSite, isPcSite]);

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>;
};

export const useMediaQueryContext = (): Context => useContext(MediaQueryContext);
