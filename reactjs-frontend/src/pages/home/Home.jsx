import { HomeStyle } from "./Styled"
import mainImg from '../../assets/ss.jpg'


export const Home = () => {


    return (
        <HomeStyle>
            <header className="header">
                <div className="top-header">
                    <span className="logo">FIELDS - CNF</span>
                </div>

                <nav className="nav-bar">
                    <ul className="list-menu">
                        <li className="item-menu">Impressoras</li>
                        <li className="item-menu">Tas</li>
                        <li className="item-menu">Toners</li>
                        <li className="item-menu">Computadores</li>  
                        <li className="item-menu">Bluebirds</li>
                    </ul>
                </nav>
                
            </header>
            <div className="img-container">
                    <img src={mainImg} width={"100%"} height={"100%"} alt="Imagem" />
                    <p></p>
                </div>
            <footer className="footer">
                <p>Development by Cleiton</p>
            </footer>
        </HomeStyle>
    )
}