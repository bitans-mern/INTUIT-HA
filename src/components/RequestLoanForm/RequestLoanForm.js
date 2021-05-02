import './RequestLoanForm.css';

const RequestLoanForm = ({amount = 20000, onSubmit}) => {
    const onChange = (evt) => {
        let newAmount = Number(evt.target.value) || amount;
        amount = newAmount;
    };
    return (
        <div className="request-loan-form-container" >
            <p>
                Please enter an amount you wish to borrow
                And presss the <strong>Request</strong> button 
                to get an instant loan terms (i.e. interest rates).
            </p>
            <div className="form-item" >
                Loan Amout: <input type="number" defaultValue={amount} onChange={onChange} />
                <button onClick={()=> onSubmit(amount)}><strong>Request</strong></button>
            </div>
        </div>
    );
};
export default RequestLoanForm;