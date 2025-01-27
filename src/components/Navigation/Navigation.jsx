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
                    <a href="https://www.ufanet.ru/pages/o-nas/?city_code=(800)&phone=600-97-01&utm_source=yandex&utm_medium=cpc&utm_campaign=71427021&utm_content=11749243608&utm_term=%D1%83%D1%84%D0%B0%D0%BD%D0%B5%D1%82"> 
                        О нас 
                    </a>
                </div>
                <div className="tel">
                    <Link to ='/registration'>
                        Профиль
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navigation;