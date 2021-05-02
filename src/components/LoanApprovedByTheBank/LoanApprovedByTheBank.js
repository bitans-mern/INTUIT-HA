import './LoanApprovedByTheBank.css';

const LoanApprovedByTheBank = ({amount, interestRate, onUseAccept, onUserDecline}) => {
    if (typeof(Intl) === 'object') {
        amount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    } else {
        amount = '$' + amount;
    }
    return (
        <div className="loan-approved-by-the-bank-container" >
            <p>
                Your request as been approved<br/>
                The bank will loan you <span className="amount">{amount}</span> with a yearly interest rate of <span className="rate">{interestRate}%</span><br/>
                <br/>
                <strong>Do you want to accept the terms of the loan?</strong>
            </p>
            <div className="form-item">
                <button className="accept-button" onClick={onUseAccept} >Accept</button>
                <button className="decline-button" onClick={onUserDecline}>Decline</button>
            </div>
        </div>
    );
};
export default LoanApprovedByTheBank;