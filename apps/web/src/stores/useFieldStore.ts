import create from 'zustand';

export const useFieldStore = create((set) => ({
  fields: {},
  setField: (id, element, field) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [id]: {
          field,
          element,
        },
      },
    })),
}));
