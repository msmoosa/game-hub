import { Platform } from "../models/game";
import useData from "./useData";
import platforms from "../data/platforms";

const usePlatforms = () => {
  return {
    data: platforms,
    error: null,
    isLoading: false,
  };
};

export default usePlatforms;
