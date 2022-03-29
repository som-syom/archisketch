import {
  ON_DETAILVIEW,
  OFF_DETAILVIEW,
  PREV_IMAGES,
  NEXT_IMAGES,
} from './types';

export const onDetailView = (id: number) => ({
  type: ON_DETAILVIEW,
  payload: {
    id: id,
  },
});

export const offDetailView = () => ({
  type: OFF_DETAILVIEW,
});

export const prevImages = () => ({
  type: PREV_IMAGES,
});

export const nextImages = () => ({
  type: NEXT_IMAGES,
});

export type DetailViewAction =
  | ReturnType<typeof onDetailView>
  | ReturnType<typeof offDetailView>
  | ReturnType<typeof prevImages>
  | ReturnType<typeof nextImages>;
