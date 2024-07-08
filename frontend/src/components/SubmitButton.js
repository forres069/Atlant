import React from "react";
import '../css/submit-button-styles.css'

const SubmitButton = ({ btype, text, className, onclick }) => {
    if (text == null) {
        text = "Submit"
    }
    return <button className={"submit-button " + className} type={btype}>{text}</button>
}
export default SubmitButton