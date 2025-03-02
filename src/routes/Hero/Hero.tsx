import { Box, Title, Text } from '@mantine/core';
import {
  useHeroStyles,
  JunkFmLogoMask,
  CommonButton,
  PageHelmet,
  colors,
  useGlobalStyles,
  JunkFmLogo,
} from '@junkfm';


export function Hero() {
  const { classes, cx } = useHeroStyles();
  const { classes: globalClasses } = useGlobalStyles();


  return (
    <Box className={cx(classes.heroWrapper)} id="hero">
      <PageHelmet title="Hero" />
      <JunkFmLogoMask />
      <Box className={classes.heroContentWrapper}>
        <Title order={4}>Destroying your favorite songs since 2010</Title>
        <CommonButton
          buttonText="BOOK US"
          buttonSize="md"
          buttonColor={colors.lightBlue}
          buttonTextColor={colors.black}
          buttonTextHoverColor={colors.white}
        />
        <Text component="p" className={globalClasses.balance} px="min(3vw, 2rem)">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatem itaque.
          Adipisci modi sapiente velit accusamus necessitatibus reprehenderit cupiditate reiciendis
          voluptates quo iure aperiam accusantium beatae hic obcaecati iste voluptas quibusdam
          placeat excepturi corrupti quod tempore, inventore laudantium quia? Saepe repellat atque
          ea? Tempore quas repudiandae aut fugit omnis minus! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At amet architecto nihil,
          adipisci autem asperiores soluta non dolor molestiae hic magnam eligendi ex vitae iusto
          laudantium porro voluptatum cum harum consectetur. Quibusdam eos a nisi aliquid maiores
          rerum nostrum cumque voluptas. Distinctio fuga recusandae exercitationem aliquam,
          reiciendis in est necessitatibus modi vero provident, molestias tenetur totam veritatis
          debitis perspiciatis. Ipsam, odit eius aliquam esse sapiente facere illum mollitia, dolore
          sed enim alias magnam saepe quas tempora quaerat. Quam voluptate ullam harum praesentium
          laborum. Sapiente accusamus esse amet repudiandae nobis iste eaque tenetur repellat culpa
          numquam voluptatibus quo commodi asperiores quisquam neque blanditiis quasi voluptates
          eligendi doloribus modi quas, vel at deleniti? Quia perferendis quos rem error saepe,
          laboriosam libero quibusdam delectus eius accusamus at non voluptas natus hic, numquam,
          explicabo illo quo tenetur aliquid maxime fugiat maiores. Quos, perferendis reiciendis?
          Aut, sint. Perspiciatis veritatis facilis exercitationem quibusdam odit pariatur atque
          odio explicabo iusto, incidunt et recusandae quia. Quidem qui culpa labore, possimus iure
          mollitia hic enim saepe. Id perferendis velit quasi rem, possimus unde, tempore,
          voluptates delectus odit quod a. <br />
          <br />
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
          <JunkFmLogo width="100%" />
        </Text>
      </Box>
    </Box>
  );
}
