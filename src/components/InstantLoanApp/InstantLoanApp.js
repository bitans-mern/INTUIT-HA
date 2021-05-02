import Header from '../Header';
import Body from '../Body';
import MachineSpec from './MachineSpec';
import './InstantLoanApp.css';

const InstantLoanApp = () => {
    return (
        <div className="instant-loan-container" >
            <Header />
            <Body machineSpec={MachineSpec}/>
        </div>
    );
};

export default InstantLoanApp;