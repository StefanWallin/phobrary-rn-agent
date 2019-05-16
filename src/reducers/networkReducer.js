const defaultState = {
  activity: false,
  activitySources: [],
  compatibleServers: {},
  error: undefined,
  foundServers: {},
  online: false,
};

export default function network(state = defaultState, action) {
  switch (action.type) {
    case 'FOUND_SERVER':
      let foundServers = {...state.foundServers};
      foundServers[action.server.fullName] = action.server;
      return {
        ...state,
        foundServers
      };
    case 'NETWORKUSAGE_START':
      return {
        ...state,
        activitySources: [...state.activitySources, action.activityName],
      }
    case 'NETWORKUSAGE_STOP':
      return {
        ...state,
        activitySources: state.activitySources.filter((element) => { element !== action.activityName })
      }
    default:
      return state;
  }
}
