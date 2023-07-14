import Graph from './components/Graph.tsx';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const Root = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <Root>
      <Global
        styles={css`
          #root {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            background-color: #242424;
          }
          body {
            margin: 0;
            display: flex;
            min-height: 100vh;
          }
        `}
      />
      <Graph />
    </Root>
  );
}

export default App;
