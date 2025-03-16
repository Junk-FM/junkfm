import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mantine/core';
import { useGlobalStyles, Menu, Footer } from '@junkfm';
import { Hero, Playlist, Schedule, Contact, About, Media } from './routes';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  const activeRoute = useLocation().pathname;

  return (
    <Box className={globalClasses.bodyWrapper} id="outermost-wrapper">
      <Menu activeRoute={activeRoute} />
      <Box id="routes-wrapper" className={globalClasses.routesWrapper}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </Box>
      <Footer activeRoute={activeRoute} />
    </Box>
  );
}

export default App;
