import {
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  return (
    <Box marginX="8" marginBottom="8">
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
