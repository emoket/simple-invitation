import React from 'react';
import ReactDOM from 'react-dom/client';
// 독도체 임포트 (원하지 않을 경우 삭제합니다.)
import '@fontsource/east-sea-dokdo';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
