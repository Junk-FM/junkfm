import { Routes, Route } from 'react-router-dom';
import { Box } from '@mantine/core';
import { useGlobalStyles, Menu } from '@junkfm';
import { Hero, Playlist } from './routes';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box className={globalClasses.bodyWrapper} id="outermost-wrapper">
      <Menu />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Box>
  );
}

export default App;
 