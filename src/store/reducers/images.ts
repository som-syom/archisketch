import { SET_IMAGES } from '../actions/types';
import { IImageData } from '../../utils/interface';
import { ImagesAction } from '../actions/images';

export type imagesState = {
  images: IImageData[];
};

const initialState: imagesState = {
  images: [{ _id: '' }],
};

const images = (
  state: imagesState = initialState,
  action: ImagesAction
): imagesState => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        images: [...action.payload.images],
      };
    default:
      return state;
  }
};

export default images;
