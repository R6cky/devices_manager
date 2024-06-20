import { HomeStyle } from "./Styled"
import mainImg from '../../assets/ss.jpg'
import { Header } from "../../components/header/Header"
import { Footer } from "../../components/footer/Footer"


export const Home = () => {


    return (
        <HomeStyle>
            <Header/>
            <div className="img-container">
                    <img src={mainImg} width={"100%"} height={"100%"} alt="Imagem" />
                    <p></p>
                </div>
            <Footer/>
        </HomeStyle>
    )
}