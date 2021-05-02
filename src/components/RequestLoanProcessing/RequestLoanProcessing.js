import { ImSpinner3 } from 'react-icons/im';
import './RequestLoanProcessing.css';
const RequestLoanProcessing = () => {
    return (
        <div className="request-loan-processing-container" >
            <div>
                Your request is being processed...<br/>
                <div><ImSpinner3 /></div>
            </div>  
        </div>
    );
};
export default RequestLoanProcessing;