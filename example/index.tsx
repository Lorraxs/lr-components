import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, TextArea } from '../.';

const App = () => {
  return (
    <div>
      <Box />
      <TextArea />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
