import { useState } from 'react';
import { themes } from './themes';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        backgroundColor: themes[theme].background,
        minHeight: '100vh',
      }}
    >
      <Header theme={themes[theme]} onToggleTheme={toggleTheme} />
      <MainContent theme={themes[theme]} />
      <Footer theme={themes[theme]} />
    </div>
  );
}

export default App;
