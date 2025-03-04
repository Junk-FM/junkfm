import { Box, Title, Text } from '@mantine/core';
import { useHeroStyles, JunkFmLogoMask, PageHelmet, useGlobalStyles, JunkFmLogo } from '@junkfm';

// deletelater
import { useBandsintown } from '@junkfm';
import { useEffect } from 'react';


export function Hero() {

  const { data, loading, error } = useBandsintown("1026065", "events"); //deletelater

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);
    console.log("Data[0].venue", data?.[0].venue);
  }, [data, loading, error]); // Log whenever data updates//deletelater

  const { classes, cx } = useHeroStyles();
  const { classes: globalClasses } = useGlobalStyles();

  return (
    <Box className={cx(classes.heroWrapper)} id="hero">
      <PageHelmet title="Hero" />
      <JunkFmLogoMask />
      <Box className={classes.heroContentWrapper}>
        <Title className={globalClasses.textContrastShadowHeavy} order={3}>
          Ruining your favorite songs since 2010
        </Title>
        <Text component="p" className={globalClasses.balance} pt="1.5em" px="min(3vw, 2rem)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit dolorem sunt
          voluptas, dignissimos eius culpa nihil, explicabo molestiae a accusantium, eos rerum quas
          laborum nemo commodi doloremque minima obcaecati sint dolorum? Sunt mollitia error modi ab
          exercitationem, nulla a. Illum, rem! Possimus, tempora! Excepturi in modi saepe quod
          distinctio non perspiciatis quam deleniti accusamus, quibusdam, assumenda tempora, itaque
          quo. Deserunt eaque modi quae rem similique non accusantium, debitis vitae, fugiat
          provident voluptatibus accusamus eos facere! Voluptatibus, necessitatibus. At quasi id
          reiciendis! Magnam dolorem excepturi vel quaerat ducimus possimus fugit aliquid facilis,
          officiis nemo reprehenderit numquam. Numquam molestias rerum officiis, accusantium quod
          asperiores aperiam voluptas iusto nihil odit itaque voluptates et repudiandae temporibus
          reprehenderit suscipit, laudantium dolorem sequi error vitae dolores. Et eum at
          consequuntur animi impedit asperiores, quia id quod minima facere laudantium doloremque
          dolor fuga? Voluptatibus tenetur voluptatem, ipsum beatae esse vitae quo! Perspiciatis
          quidem placeat corrupti. Iste expedita explicabo voluptate! Repellendus, praesentium nemo.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cupiditate mollitia
          repellat accusantium cum necessitatibus delectus fugit ullam, quae quibusdam non sint.
          Nisi earum reprehenderit quaerat omnis cum, blanditiis maxime iusto numquam. Commodi eos
          ipsum dolorem ut, quae minima pariatur.
          <br />
          <br />
        </Text>
        <JunkFmLogo width="clamp(200px, 80%, 900px)" />
        <Text component="p" className={globalClasses.balance} pt="1.5em" px="min(3vw, 2rem)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit dolorem sunt
          voluptas, dignissimos eius culpa nihil, explicabo molestiae a accusantium, eos rerum quas
          laborum nemo commodi doloremque minima obcaecati sint dolorum? Sunt mollitia error modi ab
          exercitationem, nulla a. Illum, rem! Possimus, tempora! Excepturi in modi saepe quod
          distinctio non perspiciatis quam deleniti accusamus, quibusdam, assumenda tempora, itaque
          quo. Deserunt eaque modi quae rem similique non accusantium, debitis vitae, fugiat
          provident voluptatibus accusamus eos facere! Voluptatibus, necessitatibus. At quasi id
          reiciendis! Magnam dolorem excepturi vel quaerat ducimus possimus fugit aliquid facilis,
          officiis nemo reprehenderit numquam. Numquam molestias rerum officiis, accusantium quod
          asperiores aperiam voluptas iusto nihil odit itaque voluptates et repudiandae temporibus
          reprehenderit suscipit, laudantium dolorem sequi error vitae dolores. Et eum at
          consequuntur animi impedit asperiores, quia id quod minima facere laudantium doloremque
          dolor fuga? Voluptatibus tenetur voluptatem, ipsum beatae esse vitae quo! Perspiciatis
          quidem placeat corrupti. Iste expedita explicabo voluptate! Repellendus, praesentium nemo.
          <br />
          <br />
        </Text>
      </Box>
    </Box>
  );
}
