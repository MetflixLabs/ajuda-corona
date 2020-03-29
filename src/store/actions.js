export const setIsAdblocked = (payload = null) => ({
  type: 'SET_IS_ADBLOCKED',
  payload,
});
export const setIsMinerReady = (payload = null) => ({
  type: 'SET_IS_MINER_READY',
  payload,
});
export const setIsMinerRunning = (payload = null) => ({
  type: 'SET_IS_MINER_RUNNING',
  payload,
});
export const setCurrentThrottle = (payload = null) => ({
  type: 'SET_CURRENT_THROTTLE',
  payload,
});
export const setBrazilData = payload => ({
  type: 'SET_BRAZIL_DATA',
  payload,
});
export const setServerData = payload => ({
  type: 'SET_SERVER_DATA',
  payload,
});
