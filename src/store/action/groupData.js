//action creators

const addData = (groupData) => {
  return {
    type: "ADD_GROUP",
    payload: groupData,
  };
};
const currentCardSetter = (cardNo) => {
  return {
    type: "CURRENT_CARD",
    payload: cardNo,
  };
};

export { addData, currentCardSetter };
