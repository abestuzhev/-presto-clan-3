import React from "react";
import {useForm, Controller} from "react-hook-form";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import InputMask from "react-input-mask";
import IMask from 'imask';
import { useData } from "../../DataContext";
import { api } from "../../api/api";
import imgCashReceipt from "../../img/cash-receipt.jpg";
import { generateCode } from "../../utils";

const FormAdd = () => {
    const history = useHistory();
    const {data, setValues} = useData();
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
        userName: yup.string().matches(/^([^0-9]*)$/, "В поле не должно быть цифр").required("Заполните имя").max(20, "Имя слишком длинное").min(3, "Имя слишком короткое"),
        userPhone: yup.string().required("Введите номер телефона"),
        userNumber: yup
        .number()
        .typeError('Введите номер чека')
        .required("Введите номер чека")
        .positive("Только положительное число")
    });

    const {register, handleSubmit, errors, clearErrors, control} = useForm({
        mode: 'all',
        // defaultValues: {userName: "User", userPhone:"79506602664", userNumber: "00000" },
        resolver: yupResolver(schema)
    });
    const smsCode = generateCode();
    const onSubmit = values => {
        setValues({user: values, smsCode: smsCode});       

        //отправка кода SMS
        api.sendSms(values.userPhone, smsCode).then( res => {
            if(res) {
                // console.log("sendSms", res);
                history.push('/add/step-2');
            }else {
                history.push('/add/error');
            }
        });
    }

    const normalizePhoneNumber = (value) => {
        
        const phoneNumber = parsePhoneNumberFromString(value, 'RU')
        if (!phoneNumber) {
            return value;
        }
        return phoneNumber.formatInternational();
        // return value.replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, "")
    }
    const normalizeCheckNumber = (value) => {

    }

    return (
        <>
        <h3 className="c-title c-title--h3">Добавить чек</h3>
        <div className="c-grid c-grid--beetwen">
            <div className="c-grid-col c-grid-col-6">
                <form action="" className="c-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="c-form__item">
                        <label className="c-label" htmlFor="">Имя</label>
                        <input
                            type="text"
                            ref={register({required: true})}
                            autoComplete="off"
                            className={errors.userName ? "c-input error" : "c-input"}                            
                            name="userName" />
                        {errors.userName && <span className="c-form-error">{errors?.userName?.message}</span>}
                    </div>
                    <div className="c-form__item">
                        <label className="c-label" htmlFor="">Номер телефона</label>
                        <input
                            type="tel"
                            ref={register}
                            autoComplete="off"
                            inputMode="numeric"
                            className={errors.userPhone ? "c-input error" : "c-input"}
                            name="userPhone"
                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value);
                            }}
                        />
                        {/* <Controller
                            as={InputMask}
                            control={control}
                            // ref={register({required: true})}
                            rules={{ required: true }}
                            mask="+7 999 999-99-99"
                            className={errors.userPhone ? "c-input error" : "c-input"}  
                            name="userNumber"
                            placeholder="+7 000 000-00-00"
                        /> */}
                        {/* {errors.userPhone && <span className="c-form-error">ошибка</span>} */}
                        {errors.userPhone && <span className="c-form-error">{errors?.userPhone?.message}</span>}
                    </div>
                    <div className="c-form__item">
                        <label className="c-label" htmlFor="">Номер кассового чека</label>
                        <input
                            type="number"
                            ref={register}
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
                        {/* <Controller
                            as={InputMask}
                            control={control}
                            mask="999.999.999-99"
                            name="userNumber"
                            defaultValue="000000"
                        /> */}
                        {errors.userNumber && <span className="c-form-error">{errors?.userNumber?.message}</span>}
                    </div>
                    <div className="c-form__item">
                        <div className="c-btn-layout">
                            <button
                                onClick={() => {
                                    clearErrors();                                    
                                }}
                                className="c-btn large c-btn--primary"
                            >Добавить</button>
                        </div>
                    </div>
                </form>
            </div>    
            <div className="c-grid-col c-grid-col-6">
                <div className="c-form-img">
                    <img src={imgCashReceipt} alt=""/>
                </div>  
            </div>    
        </div>
        
        </>
    )
}

export default FormAdd;