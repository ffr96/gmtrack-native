export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_TRAINING_LOGS":
      return {
        ...state,
        trainingLog: action.payload
      };
    case "ADD_TRAINING_LOG":
      return {
        ...state,
        trainingLog: state.trainingLog.concat(action.payload)
      };
    case "REMOVE_TRAINING_LOG": {
      const newTrainingLog = [];
      state.trainingLog.map(log => {
        if (log.id !== action.payload) {
          newTrainingLog.push(log);
        }
      });
      return {
        ...state,
        trainingLog: newTrainingLog,
      };
    }
    case "RAISE_NOTIFICATION": 
      return {
        ...state, 
        notification: action.payload
      };
    case "ADD_EXERCISE_TO_LOG": {
      let newLog = state.trainingLog;
      if (state.trainingLog[state.trainingLog.length-1].id === action.payload.id) {
        newLog = [...state.trainingLog];
        newLog[newLog.length-1].exercises.push(action.payload.data);
      }
      return {
        ...state,
        trainingLog: newLog
      };
    }
    default:
      return state;
  }
};

