import "../../css/email-confirm-styles.css"
import SubmitButton from "../SubmitButton";
import {Link} from "react-router-dom";
const Confirm = () => {
    return (
        <div className="main">
            <div className="confirm">
                <div className="confirm__picture"></div>
                <div className="confirm__text">
                    <h1 className="title confirm__title">
                        Подтверди свою почту
                    </h1>
                    <p className="confirm__description">
                        На ваш email было отправлено письмо,
                        с ссылкой для подтверждения! Перейдите по данной
                        ссылке, чтобы подтвердить почту!
                    </p>
                </div>
                <form className="confirm__form">
                    <Link to="/">
                        <SubmitButton className="confirm__button" type="submit" text="На главную"/>
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default Confirm