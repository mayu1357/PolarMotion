'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CallbackContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  useEffect(() => {
    if (code) {
      console.log('Authorization code:', code);
      // バックエンドへ送る処理など
    } else if (error) {
      console.error('Authorization error:', error);
    }
  }, [code, error]);

  return (
    <div className="p-10 text-center">
      <h1 className="text-xl font-bold">OAuth Callback</h1>
      {code ? (
        <p>認証コードを取得しました: <code>{code}</code></p>
      ) : error ? (
        <p>エラーが発生しました: <code>{error}</code></p>
      ) : (
        <p>認証コードを取得中...</p>
      )}
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">読み込み中...</div>}>
      <CallbackContent />
    </Suspense>
  );
}
