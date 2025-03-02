import { Routes, Route } from 'react-router-dom';
import { Box } from '@mantine/core';
import { Home, Contact, useGlobalStyles, Menu } from '@junkfm';

function App() {
  const { classes: globalClasses } = useGlobalStyles();
  return (
    <Box className={globalClasses.bodyWrapper} id="outermost-wrapper">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  );
}

export default App;
