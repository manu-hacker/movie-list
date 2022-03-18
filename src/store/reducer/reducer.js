const initState = {
  data: [],
};

const dataRed = (state = initState, action) => {
  switch (action.type) {
    case "GETMOVIE":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataRed;
