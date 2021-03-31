import React from "react";
import {useForm} from "react-hook-form";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const FormAdd = () => {

    const {register, handleSubmit, watch, errors, clearErrors} = useForm();
    const onSubmit = data => {
        console.log("data", data);
    }

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value, 'RU')
        if (!phoneNumber) {
            return value;
        }

        console.log("phoneNumber", phoneNumber)
        return phoneNumber.formatInternational();
        // return value.replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, "")
    }
    const normalizeCheckNumber = (value) => {

    }

    return (
        <form action="" className="c-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="c-form__item">
                <label className="c-label" htmlFor="">Имя</label>
                <input
                    type="text"
                    ref={register({required: true})}
                    autoComplete="off"
                    className={errors.userName ? "c-input error" : "c-input"}
                    name="userName" />
                {errors.userName && <span className="c-form-error">Введите своё имя</span>}
            </div>
            <div className="c-form__item">
                <label className="c-label" htmlFor="">Номер телефона</label>
                <input
                    type="tel"
                    ref={register({required: true, minLength:11, maxLength:11})}
                    autoComplete="off"
                    inputMode="numeric"
                    className={errors.userPhone ? "c-input error" : "c-input"}
                    name="userPhone"
                    onChange={(event) => {
                        event.target.value = normalizePhoneNumber(event.target.value);
                    }}
                />
                {errors.userPhone && <span className="c-form-error">Заполните телефон</span>}
            </div>
            <div className="c-form__item">
                <label className="c-label" htmlFor="">Номер кассового чека</label>
                <input
                    type="number"
                    ref={register({required: true, minLength: 6, maxLength: 6})}
                    placeholder="000000"
                    autoComplete="off"
                    inputMode="numeric"
                    className={errors.userNumber ? "c-input error" : "c-input"}
                    name="userNumber"
                    // onChange={(event) => {
                    //     let {value} = event.target;
                    //     event.target.value = normalizeCheckNumber(value);
                    // }}
                />
                {errors.userNumber && <span className="c-form-error">Введите номер чека (6 цифр)</span>}
            </div>
            <div className="c-form__item">
                <div className="c-btn-layout">
                    <button
                        onClick={() => clearErrors()}
                        className="c-btn large c-btn--primary"
                    >Зарегистрировать</button>
                </div>
            </div>
        </form>
    )
}

export default FormAdd;