let nextNameId = 0;

export const addName = (text) => {
  console.log("text:", text);
  return {
    type: "ADD_NAME",
    id: nextNameId++,
    text,
  };
};
