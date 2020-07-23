const initialState = {
  open: false,
  message: "",
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SNACKBAR":
      return {
        ...state,
        open: action.snackBar.open,
        message: action.snackBar.message,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
