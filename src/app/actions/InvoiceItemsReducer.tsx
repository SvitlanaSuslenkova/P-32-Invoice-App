type ItemState = {
  price: number;
  quantity: number;
  total: string;
};

type Action =
  | { type: 'UPDATE_ITEM'; index: number; price: number; quantity: number }
  | { type: 'CALCULATE_TOTAL'; index: number };

export const initialStateReducer: ItemState[] = [
  { price: 0, quantity: 0, total: '0.00' },
];

export const Itemsreducer = (
  state: ItemState[],
  action: Action
): ItemState[] => {
  switch (action.type) {
    case 'UPDATE_ITEM': {
      const updatedItems = [...state];
      updatedItems[action.index] = {
        ...updatedItems[action.index],
        price: action.price,
        quantity: action.quantity,
      };
      return updatedItems;
    }
    case 'CALCULATE_TOTAL': {
      const updatedItems = [...state];
      const { price, quantity } = updatedItems[action.index];
      const total = (price * quantity).toFixed(2);
      updatedItems[action.index].total = total;
      return updatedItems;
    }
    default:
      return state;
  }
};
