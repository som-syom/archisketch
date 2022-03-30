import { TOGGLE_CHECKBOX, ALL_CHECK, ALL_UNCHECK } from './types';

export const toggleCheckbox = (idx: number) => ({
  type: TOGGLE_CHECKBOX,
  payload: {
    idx: idx,
  },
});

export const allCheck = () => ({
  type: ALL_CHECK,
});

export const allUncheck = () => ({
  type: ALL_UNCHECK,
});

export type SelectedAction =
  | ReturnType<typeof toggleCheckbox>
  | ReturnType<typeof allCheck>
  | ReturnType<typeof allUncheck>;
