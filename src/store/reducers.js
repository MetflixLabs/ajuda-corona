import { INITIAL_STATE } from '@store';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IS_ADBLOCKED':
      return {
        ...state,
        isAdblocked: action.payload,
      };
    case 'SET_IS_MINER_READY':
      return {
        ...state,
        isMinerReady: action.payload,
      };
    case 'SET_IS_MINER_RUNNING':
      return {
        ...state,
        isMinerRunning: action.payload,
      };
    case 'SET_CURRENT_THROTTLE':
      return { ...state, currentThrottle: action.payload };
    case 'SET_BRAZIL_DATA':
      return { ...state, brazilData: action.payload };
    case 'SET_SERVER_DATA':
      return { ...state, serverData: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
