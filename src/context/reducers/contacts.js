const contact = (state, {type, preload}) => {
  switch (type) {
    case 'GET_CONTACTS':
      return {state};

    default:
      return state;
  }
};
