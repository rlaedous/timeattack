const ADD = "calculator/ADD";
const MINUS = "calculator/MINUS";

export const addNumber = (payload) => {
  return {
    type: ADD,
    payload: payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS,
    payload: payload,
  };
};
// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS:
      return {
        ...state,
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
