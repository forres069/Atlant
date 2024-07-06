import inputIcon from '../../icons/input.svg'

const Auth = ({ type, placeholder, value, onChange }) => {
    return <div className="input-box">
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="input-box__input"/>
        <img src={inputIcon} className="input-box__icon" alt="input icon"/>
    </div>
}
export default Auth