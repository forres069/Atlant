import SubmitButton from "../SubmitButton";

const confirm = () => {
    return (
        <div className="main">
            <div className="confirm">
                <div className="confirm__picture"></div>
                <div className="confirm__text">
                    <h1 className="title confirm__title">
                        Код подтверждения отправлен на почту
                    </h1>
                    <p className="confirm__description">
                        На ваш email было отправлено письмо,
                        с ссылкой для подтверждения! Перейдите по данной
                        ссылке, чтобы подтвердить почту!
                    </p>
                </div>
                <form className="confirm__form">
                    <SubmitButton className="confirm__button" type="submit" text="Подтевердить"/>
                </form>
            </div>
        </div>
    )
}
export default confirm