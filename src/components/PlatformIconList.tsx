import React from "react";
import type { IconType } from "react-icons";
import { Platform } from "../models/game";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiYoutube,
    web: BsGlobe,
  };
  return (
    <HStack marginY="1">
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
