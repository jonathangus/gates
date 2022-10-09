import create from 'zustand';

export const useFieldStore = create((set) => ({
  fields: {},
  setField: (conditionID, element, id, field) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [conditionID]: {
          field,
          element,
          id,
        },
      },
    })),
}));
