const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Buy Ice Cream"
  };
}

const initalCakeState = {
  numOfCakes: 1
};

const initialIceCreamState = {
  numOfIceCreams: 1
};
// Reducer
const cakeReducer = (state = initalCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };

    default:
      return state;
  }
};

// Store
const store = createStore(reducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
