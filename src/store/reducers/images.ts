import { SET_IMAGES, DELETE_IMAGES } from '../actions/types';
import { IImageData } from '../../utils/interface';
import { ImagesAction } from '../actions/images';

export type imagesState = {
  images: IImageData[] | [];
};

const initialState: imagesState = {
  images: [],
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
    case DELETE_IMAGES:
      return {
        images: state.images.filter(
          (image: IImageData, index: number) =>
            !action.payload.id.includes(index)
        ),
      };
    default:
      return state;
  }
};

export default images;
