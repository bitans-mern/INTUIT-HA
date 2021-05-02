import './LoanRejectByTheBank.css';
const LoanRejectByTheBank = ({onUseAccept, onUserDecline}) => {
    return (
        <div className="loan-reject-by-the-bank-container" >
            <p>
                Your request for a loan term was declined by the bank!
            </p>
            <div>
                <button className="accept-button" onClick={onUseAccept} >Accept</button>
                <button className="decline-button" onClick={onUserDecline}>Decline</button>
            </div>
        </div>
    );
};
export default LoanRejectByTheBank;