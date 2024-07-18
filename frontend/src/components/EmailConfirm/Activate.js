import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SubmitButton from "../SubmitButton";
import axios from 'axios';

const Activate = () => {
    const { uid, token } = useParams();
    const [setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsSubmitting(true);
        try {
            await axios.post('http://127.0.0.1:8000/auth/users/activation/', {
                uid,
                token
            });
            navigate('/')
          
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsSubmitting(false);
        }
    };
    

    return (
        <div className="main">
            <div className="confirm">
                <div className="confirm__picture"></div>
                <div className="confirm__text">
                    <h1 className="title confirm__title">
                        Подтверди свою почту
                    </h1>
                    <p className="confirm__description">
                        Осталось совсем немного! Подтверди email и войди в аккаунт!
                    </p>
                </div>
                <form className="confirm__form" onSubmit={handleSubmit}>
                    <SubmitButton className="confirm__button" btype="submit" text="Подтевердить"/>
                </form>
            </div>
        </div>
    )
}
export default Activate