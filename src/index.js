import React from 'react';
import ReactDOM from 'react-dom';

import SecurityWidget from './SecurityWidget'


if (!process.env.REACT_APP_BUILD_LIBRARY) {
  import("./App").then(({ default: App }) => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
}

export {
    SecurityWidget
}