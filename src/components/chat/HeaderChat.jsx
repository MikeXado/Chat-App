import React from "react";
import {
  Header,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconBrandBadoo } from "@tabler/icons";
export default function HeaderChat({ opened, setOpened }) {
  const theme = useMantineTheme();
  return (
    <Header height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text size="md" weight={700} color="blue" className="header__text">
          {" "}
          <IconBrandBadoo className="header__logo" />
          Chat App
        </Text>
      </div>
    </Header>
  );
}
