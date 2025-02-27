import { Home } from './components';
import './App.css';
import { Box } from '@mantine/core';
import { useGlobalStyles } from './global/useGlobalStyles';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box h="100vh" w="100vw" className={globalClasses.bodyWrapper}>
      <Home />
    </Box>
  );
}

export default App;
