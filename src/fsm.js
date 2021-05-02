const createMachine = (stateMachineDefinition) => {
    const machine = {
        currentState: stateMachineDefinition.initialState,
        transition(currentState, eventName) {

            const currentStateDefinition = stateMachineDefinition[currentState]
            const destinationTransition = currentStateDefinition.transitions[eventName]
            if (!destinationTransition) {
                console.log(`Transition: ${eventName} not found!`);
                return;
            }

            const destinationState = destinationTransition.targetState;
            const destinationStateDefinition = stateMachineDefinition[destinationState];


            if (destinationTransition.action)
                destinationTransition.action();

            if (currentStateDefinition.actions && currentStateDefinition.actions.onExit)
                currentStateDefinition.actions.onExit();

            if (destinationStateDefinition.actions && destinationStateDefinition.actions.onEnter)
                destinationStateDefinition.actions.onEnter();

            machine.currentState = destinationState;

            return machine;
        },
    }
    return machine
};

export default createMachine;