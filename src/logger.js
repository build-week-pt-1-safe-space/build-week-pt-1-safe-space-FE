export const logger = store => next => action => {
  console.group(action.type);
  console.log("Prev State", store.getState());
  console.log("action", action);
  next(action);
  console.log("New State", store.getState());
  console.groupEnd();
};
