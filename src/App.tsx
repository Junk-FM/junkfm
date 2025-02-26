import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          rowGap: '1rem',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ color: 'white', marginBlock: '0' }}>Header Text</h1>
        <h2 style={{ color: 'white', marginBlock: '0' }}>This is it. The site is done.</h2>
        <h3 style={{ color: 'white', marginBlock: '0' }}>JK. Coming soon.</h3>
        <p style={{ color: 'white', marginBlock: '0' }}>
          This is a paragraph. It's not very interesting.
        </p>
      </div>
    </div>
  );
}

export default App;
