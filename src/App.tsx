import { useState } from "react";
import styled from "@emotion/styled";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

const StyledLogo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react {
    animation: logo-spin infinite 20s linear;
    :hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  }
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledCard = styled.div`
  padding: 2em;
`;

const StyledText = styled.p`
  color: #888;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <StyledLogo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <StyledLogo src={reactLogo} className="react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <StyledCard>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledCard>
      <StyledText>Click on the Vite and React logos to learn more</StyledText>
    </>
  );
}

export default App;
