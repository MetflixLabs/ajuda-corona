const INITIAL_STATE = {
  isAdblocked: false,
  isMinerReady: false,
  isMinerRunning: false,
  currentThrottle: 1,
  brazilData: null,
  serverData: {
    balance: '-',
    onlineUsers: '-',
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line no-console
  console.log(
    `state: ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`
  );
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
