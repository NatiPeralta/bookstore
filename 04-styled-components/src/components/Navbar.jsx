// src/components/Navbar.jsx
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  background-color: ${({ darkMode }) => (darkMode ? "#222" : "#faf6f1")};
  color: ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222")};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: background-color 0.25s, color 0.25s;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222")};
  color: ${({ darkMode }) => (darkMode ? "#222" : "#faf6f1")};
  border: 1px solid ${({ darkMode }) => (darkMode ? "#faf6f1" : "#222")};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  &:hover {
    opacity: 0.9;
  }
`;

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <Header darkMode={darkMode}>
      <Brand>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 17v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3zm-3 4H6v-1H5v-2h1v-1h12zm0-12h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1h1z"/>
        </svg>
        <Title>Bookstore</Title>
      </Brand>
      <Actions>
        <ThemeButton darkMode={darkMode} onClick={toggleTheme}>
          {darkMode ? "Escuro" : "Claro"}
        </ThemeButton>
        <div className="cart">🛒<span>0</span></div>
      </Actions>
    </Header>
  );
}
