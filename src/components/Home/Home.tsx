import { Box, Stack } from '@mantine/core';

export function Home() {
  
  return (
    <Box bg="black">
      <Stack pos="absolute" top="50%" left="50%" ta="center">
        <h1 style={{ color: 'white', marginBlock: '0' }}>Header Text</h1>
        <h2 style={{ color: 'white', marginBlock: '0' }}>This is it. The site is done.</h2>
        <h3 style={{ color: 'white', marginBlock: '0' }}>JK. Coming soon.</h3>
        <p style={{ color: 'white', marginBlock: '0' }}>
          This is a paragraph. It's not very interesting.
        </p>
      </Stack>
    </Box>
  );
}
