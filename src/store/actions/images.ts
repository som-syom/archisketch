import { SET_IMAGES, DELETE_IMAGES } from './types';
import { IImageData } from '../../utils/interface';

export const setImages = (images: IImageData[]) => ({
  type: SET_IMAGES,
  payload: {
    images: images,
  },
});

export const deleteImages = (id: number[]) => ({
  type: DELETE_IMAGES,
  payload: {
    id: id,
  },
});

export type ImagesAction =
  | ReturnType<typeof setImages>
  | ReturnType<typeof deleteImages>;
