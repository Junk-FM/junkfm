import { Routes, Route } from 'react-router-dom';
import { Box } from '@mantine/core';
import { useGlobalStyles, Menu, Footer } from '@junkfm';
import { Hero, Playlist, Schedule, Contact } from './routes';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box className={globalClasses.bodyWrapper} id="outermost-wrapper">
      <Menu />
      <Box id="routes-wrapper" className={globalClasses.routesWrapper}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
