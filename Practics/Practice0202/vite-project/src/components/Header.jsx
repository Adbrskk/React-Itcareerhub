import ThemeSwitcher from './ThemeSwitcher';

function Header({ theme, onToggleTheme }) {
  return (
    <header
      style={{
        backgroundColor: theme.headerFooter,
        color: theme.text,
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `2px solid ${theme.border}`,
      }}
    >
      <h2>ThemeSwitcher:</h2>
      <ThemeSwitcher onToggleTheme={onToggleTheme} theme={theme} />
    </header>
  );
}

export default Header;
