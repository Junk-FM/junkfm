import { Box, Title } from '@mantine/core';
import './App.css';

function App() {
  return (
    // Let's NOT use inline styling...I just have it in the placeholder
    <Box
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '2rem',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Title order={1} m={0} style={{ color: 'white' }}>
        Junk FM
      </Title>
      <Title order={2} m={0} fw={400} style={{ color: 'white' }}>
        This is it. The site is done.
      </Title>
      <Title order={5} m={0} fw={300} style={{ color: 'white' }}>
        JK. Coming soon.
      </Title>
    </Box>
  );
}

export default App;
