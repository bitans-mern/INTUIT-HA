import { useReducer } from 'react';
import createMachine from '../fsm';

const useStateMachine = (spec) => {
    const reducer = useReducer((currentState, event) => {
        const machine = createMachine(spec);
        if (!machine) {
            throw new Error(`Failed to create machine by spec = ${JSON.stringify(spec)}`);
        }
        const machineTransition = machine.transition(currentState, event);
        if (!machineTransition) {
            throw new Error(`Failed to transition currentState = ${currentState} event = ${event}`);
        }
        return machineTransition.currentState;
    }, spec.initialState);
    return reducer;
};
export default useStateMachine;
  