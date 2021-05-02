import HeaderPng from '../../images/HeaderPng.png';
import './Header.css';
const Header = () => {
    return (
        <div className="instant-loan-header-container" >
            <img src={HeaderPng} alt="header" />
        </div>
    );
};

export default Header;