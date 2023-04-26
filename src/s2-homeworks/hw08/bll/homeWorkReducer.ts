import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name

      const sortArray = [
        ...state.sort((a: UserType, b: UserType) => {
          const aName = a.name.toUpperCase();
          const bName = b.name.toUpperCase();
          if (aName < bName) {
            return -1;
          } else {
            return 1;
          }
        }),
      ];

      if (action.payload === "up") {
        return sortArray;
      } else {
        return sortArray.reverse();
      }

      // need to fix
    }
    case "check": {
      return state.filter((el) => el.age >= action.payload)
        
        
      // / need to fix
    }
    default:
      return state;
  }
};
