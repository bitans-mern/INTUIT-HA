import DoYouWantANewLoan from '../DoYouWantANewLoan';
import './UserDecline.css';
const UserDecline = ({onUserAccept, onUserDecline}) => {
    return (
        <div className="user-decline-container" >
            <p>
                We are sorry that the terms for the loan did not satifiy your needs.<br/>
                You are welcome to request a new load.
           </p>
           <DoYouWantANewLoan onUserAccept={onUserAccept} onUserDecline={onUserDecline}/>
        </div>
    );
};
export default UserDecline;