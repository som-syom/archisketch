import { TOGGLE_MODAL } from './types';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export type ModalAction = ReturnType<typeof toggleModal>;
