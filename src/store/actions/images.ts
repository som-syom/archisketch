import { SET_IMAGES } from './types';
import { IImageData } from '../../utils/interface';

export const setImages = (images: IImageData[]) => ({
  type: SET_IMAGES,
  payload: {
    images: images,
  },
});

export type ImagesAction = ReturnType<typeof setImages>;
