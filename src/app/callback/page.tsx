'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  useEffect(() => {
    if (code) {
      console.log('Authorization code:', code);
      // ここでバックエンドにPOSTしたり、次の処理に進めたりします
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
