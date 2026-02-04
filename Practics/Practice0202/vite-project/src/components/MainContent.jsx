function MainContent({ theme }) {
  return (
    <main
      style={{
        color: theme.text,
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <h2>First paragraph</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec tempus sagittis enim vitae sollicitudin.
        Aliquam a sem quis felis interdum molestie.
      </p>

      <h2 style={{ marginTop: '40px' }}>Second paragraph</h2>
      <p>
        Suspendisse sit amet dolor suscipit, tincidunt odio non,
        dignissim elit. Integer a velit tincidunt, malesuada massa
        ut, vulputate turpis.
      </p>
    </main>
  );
}

export default MainContent;
