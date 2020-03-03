import { SIGN_OUT, SIGN_IN } from '../constant/login';

const Initial_state = {
  isSignedIn: null,
  userId: null
};

export default (state = Initial_state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
