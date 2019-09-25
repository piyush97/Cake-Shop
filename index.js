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

const initalState = {
  numOfCakes: 10,
  numOfIceCreams: 20
};
// Reducer
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
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
