import { HomeStyle } from "./Styled"
import mainImg from '../../assets/ss.jpg'


export const Home = () => {


    return (
        <HomeStyle>
            <header className="header">
                <span className="logo">Logo</span>
                <nav className="nav-bar">
                    Menu
                </nav>
                
            </header>
            <div className="img-container">
                    <img src={mainImg} width={"100%"} height={"100%"} alt="Imagem" />
                    <p></p>
                </div>
            <footer className="footer">

            </footer>
        </HomeStyle>
    )
}