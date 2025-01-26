import './Navigation.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-ufa.png'
function Navigation(){
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="logotype" />
                </div>
                <div className="navigation">
                    <Link to="/"> 
                        Главная 
                    </Link>
                    <Link to="/map"> 
                        Карта загруженности 
                    </Link>
                    <Link to="/about"> 
                        О нас 
                    </Link>
                </div>
                <div className="tel">
                    <Link to ='/registration'>
                        Рега
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;