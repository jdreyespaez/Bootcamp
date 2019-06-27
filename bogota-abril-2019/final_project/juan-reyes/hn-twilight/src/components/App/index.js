import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { sleepMode } from '../../styles/twilight';
// import List from 'components/List';

import { Wrapper, Title } from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={sleepMode}>
        <div>
          <Wrapper>
            <Title>Hacker News Feed</Title>
            {/* <List /> */}
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
