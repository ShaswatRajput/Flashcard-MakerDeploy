// Adding items to local storage
let localData = localStorage.getItem("groupData");
let localCurrentCard = localStorage.getItem("currentCard");

//initial state and parsing of local storage data
let initialGroupsState = {
  groupData: localData ? JSON.parse(localData) : [],
  currentCard: localCurrentCard ? localCurrentCard : null,
};
// Main Reducer Function
const groupsReducer = (state = initialGroupsState, action) => {
  switch (action.type) {
    case "ADD_GROUP":
      localStorage.setItem(
        "groupData",
        JSON.stringify([...state.groupData, action.payload])
      );
      return { ...state, groupData: [...state.groupData, action.payload] };
    case "CURRENT_CARD":
      localStorage.setItem("currentCard", action.payload);
      return { ...state, currentCard: action.payload };

    default:
      return state;
  }
};
export default groupsReducer;
