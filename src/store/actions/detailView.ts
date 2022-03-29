import { ON_DETAILVIEW, OFF_DETAILVIEW } from './types';
export const onDetailView = (id: number) => ({
  type: ON_DETAILVIEW,
  payload: {
    id: id,
  },
});

export const offDetailView = () => ({
  type: OFF_DETAILVIEW,
});

export type DetailViewAction =
  | ReturnType<typeof onDetailView>
  | ReturnType<typeof offDetailView>;
