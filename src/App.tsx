import { Routes, Route } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Home, Contact, useGlobalStyles, MenuDesktop } from '@junkfm';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box className={globalClasses.bodyWrapper} id="outermost-wrapper">
      <MenuDesktop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
