/* eslint-disable no-case-declarations */
/* eslint-disable prefer-const */
/* eslint-disable consistent-return */
const CartReducers = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        carts: [...state.carts,
          { id: action.id, quantity: action.quantity },
        ],
      };
    case 'REMOVE_FROM_CART':
      let newCarts = state.carts;
      const removeIndex = state.carts.findIndex((cartId) => cartId.id === action.id);
      if (removeIndex > -1) {
        newCarts.splice(removeIndex, 1);
      }
      return {
        ...state,
        carts: newCarts,
      };
    default:
      break;
  }
};
export default CartReducers;
