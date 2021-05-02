const MachineSpec = {
    initialState: "RequestLoan",
    "RequestLoan": {
        transitions: {
            "sendRequest": {
                targetState: "RequestLoanProcessing"
            }
        }
    },
    "RequestLoanProcessing": {
        transitions: {
            "approve": {
                targetState: "LoanApprovedByTheBank"
            },
            "reject": {
                targetState: "LoanRejectByTheBank"
            }
        }
    },
    "LoanApprovedByTheBank": {
        transitions: {
            "accept": {
                targetState: "UserApproved"
            },
            "decline": {
                targetState: "UserDecline"
            }
        }
    },
    "LoanRejectByTheBank": {
        transitions: {
            "wantQuote": {
                targetState: "RequestLoan"
            },
            "dontWant": {
                targetState: "End"
            }
        }
    },
    "UserApproved": {
        transitions: {
            "wantQuote": {
                targetState: "RequestLoan"
            },
            "dontWant": {
                targetState: "End"
            }
        }
    },
    "UserDecline": {
        transitions: {
            "wantQuote": {
                targetState: "RequestLoan"
            },
            "dontWant": {
                targetState: "End"
            }
        }
    },
    "End": {
    }
};

export default MachineSpec;