export default (state = null, {type, payload}) => {
  switch (type) {
    case 'select_library':
      return payload;
    default:
      return state;
  }
};
