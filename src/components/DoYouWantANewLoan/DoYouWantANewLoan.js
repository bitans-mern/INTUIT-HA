import './DoYouWantANewLoan.css';
const DoYouWantANewLoan = ({onUserAccept, onUserDecline}) => {
    return (
        <div className="do-you-want-new-loan-container" >
           Do you want to get a new quote for a loan?
           <div>
                <button className="yes-button" onClick={onUserAccept}>yes</button>
                <button className="no-button" onClick={onUserDecline}>no</button>
            </div>
        </div>
    );
};
export default DoYouWantANewLoan;