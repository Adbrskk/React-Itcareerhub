function ThemeSwitcher({ onToggleTheme, theme }) {
  return (
    <button
      onClick={onToggleTheme}
      style={{
        padding: '10px',
        borderRadius: '6px',
        border: `2px solid ${theme.border}`,
        background: 'transparent',
        color: theme.text,
        cursor: 'pointer',
      }}
    >
      Switch Theme
    </button>
  );
}

export default ThemeSwitcher;
