import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "./components/ui/provider"
import App from './App';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <Provider>
   <App />
   </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
