import DoYouWantANewLoan from '../DoYouWantANewLoan';
import './UserApproved.css';
const UserApproved = ({onUserAccept, onUserDecline}) => {
    return (
        <div className="user-approved-container" >
            <p>
                You loan has been granted, the funds will be transferred to your account within <strong>24 hours</strong>.
            </p>
            <DoYouWantANewLoan onUserAccept={onUserAccept} onUserDecline={onUserDecline}/>
        </div>
    );
};
export default UserApproved;