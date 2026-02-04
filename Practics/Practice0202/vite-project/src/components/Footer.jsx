function Footer({ theme }) {
  return (
    <footer
      style={{
        backgroundColor: theme.headerFooter,
        color: theme.text,
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: `2px solid ${theme.border}`,
      }}
    >
      <span>CopyRights</span>
      <span>Links</span>
    </footer>
  );
}

export default Footer;
