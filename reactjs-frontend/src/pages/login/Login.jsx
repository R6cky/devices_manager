import { LoginStyle } from "./Styled"

export const Login = () => {

    return(
        <LoginStyle>
            <form action="" className="form-login" onSubmit={()=> console.log("Hello login")}>
                <input type="text"  placeholder="Usuário" className="user-login"  />
                <input type="password" className="password-login" />
                <input type="submit" className="send-button" />
            </form>
        </LoginStyle>
    )
}