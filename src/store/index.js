import { createStore } from 'redux';
import reducer from './reducers';

export const INITIAL_STATE = {
  isAdblocked: false,
  isMinerReady: false,
  isMinerRunning: false,
  currentThrottle: 33,
  brazilData: null,
  serverData: {
    balance: '-',
    onlineUsers: '-',
  },
};

const store = createStore(reducer);

export default store;
