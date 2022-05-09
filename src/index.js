import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";

const element = <h1>Hello World!!</h1>;
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App/>);
