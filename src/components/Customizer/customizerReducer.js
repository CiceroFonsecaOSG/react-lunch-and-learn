export function customsReducer(customs, action) {
  switch (action.type) {
    case "added": {
      console.log(customs);
      return [
        ...customs,
        {
          id: action.id,
          text: action.text,
          reviewed: action.reviewed,
        },
      ];
    }
    case "changed": {
      return customs.map((c) => {
        if (c.id === action.id) {
          return action.custom;
        } else {
          return c;
        }
      });
    }
    case "deleted": {
      return customs.filter((custom) => custom.id !== action.id);
    }
    default: {
      throw Error("Unkown action: " + action.type);
    }
  }
}
