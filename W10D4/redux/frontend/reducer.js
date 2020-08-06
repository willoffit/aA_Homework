const initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_LOCATION":
      return {
        jobs: action.jobs,
        city: action.city
      }
    default:
      return state;
  }
};

window.reducer = reducer

export default reducer;
