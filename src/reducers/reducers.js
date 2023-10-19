// src/reducers/reducers.js
const initialState = {
  greeting: '',
  error: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING_SUCCESS':
      return { ...state, greeting: action.payload, error: '' };
    case 'FETCH_GREETING_FAILURE':
      return { ...state, greeting: '', error: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
