import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh" },
    4: { src: thumbsUp, alt: "Recommended" },
    5: { src: bullsEye, alt: "Exceptional" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
