const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
}

const initalState = {
  numOfCakes: 10
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};
