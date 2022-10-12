import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MyContextProvider } from './context/MyContext';

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <MyContextProvider>
          <App />
        </MyContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);

