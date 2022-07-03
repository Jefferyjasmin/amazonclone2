export const getBasketTotoal = (basket) => {
  const newTotal = basket?.reduce((amount, item) => item.price + amount, 0);

  return newTotal;
};

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // do something to basket
      return { ...state, basket: [...state.basket, action.item] };

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    case "REMOVE_FROM_BASKET":
      // remove something from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exsit in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id} as its not `);
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export default reducer;
