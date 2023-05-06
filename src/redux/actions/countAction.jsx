const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const incrementAsync = () => {
  return {
    type: "INCREMENT_ASYNC",
  };
};

const decrementAsync = () => {
  return {
    type: "DECREMENT_ASYNC",
  };
};
export { increment, decrement, incrementAsync, decrementAsync };
