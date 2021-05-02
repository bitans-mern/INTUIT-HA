import { useState } from 'react';
import useStateMachine from '../../custom-hooks/useStateMachine';
import RequestLoanForm from '../RequestLoanForm';
import RequestLoanProcessing from '../RequestLoanProcessing';
import LoanApprovedByTheBank from '../LoanApprovedByTheBank';
import LoanRejectByTheBank from '../LoanRejectByTheBank';
import UserApproved from '../UserApproved';
import UserDecline from '../UserDecline';
import End from '../End';
import requestLoan from './requestLoan';
import './Body.css';

const StateDrivenBody = ({machineSpec, loanAmount = 20000, loanInterestRate = 10}) => {
    const [currentState, sendEvent] = useStateMachine(machineSpec);
    const [currentAmount, setAmount] = useState(loanAmount);
    const [currentInterestRate, setInterestRate] = useState(loanInterestRate);

    const onRequestLoan = (amount) => {
        setAmount(amount);
        sendEvent('sendRequest');
        requestLoan(amount).then(({isLoanApproved, interestRate})=>{
            let event = 'reject'
            if (isLoanApproved) {
              setInterestRate(interestRate);
              event = 'approve';
            }
            sendEvent(event);
          });
    };

    const onUseAccept = () => {
        sendEvent('wantQuote');
    };
    const onUserDecline = () => {
        sendEvent('dontWant');
    };

    switch (currentState) {
        case 'RequestLoan':
            return <RequestLoanForm onSubmit={onRequestLoan}/>;
        case 'RequestLoanProcessing':
            return <RequestLoanProcessing />;
        case 'LoanApprovedByTheBank':
            return <LoanApprovedByTheBank amount={currentAmount} interestRate={currentInterestRate}
                    onUseAccept={()=>sendEvent('accept')} onUserDecline={()=>sendEvent('decline')}/>;
        case 'LoanRejectByTheBank':
            return <LoanRejectByTheBank onUseAccept={onUseAccept} onUserDecline={onUserDecline}/>;
        case 'UserApproved':
            return <UserApproved onUserAccept={onUseAccept} onUserDecline={onUserDecline}/>;
        case 'UserDecline':
            return <UserDecline  onUserAccept={onUseAccept} onUserDecline={onUserDecline}/>;
        case 'End':
        default:
            return <End />;
    }

};


const Body = ({machineSpec, loanAmount = 20000, loanInterestRate = 10}) => {
    return (
        <div className="instant-loan-body-container" >
            <StateDrivenBody machineSpec={machineSpec} loanAmount={loanAmount} loanInterestRate={loanInterestRate} />
        </div>
    );
};

export default Body;