import React, {useState} from "react";
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
import {convertDateToString} from "../../helpers/functions";

const FormAdd = () => {
    const history = useHistory();
    const {data, setValues} = useData();
    const [isLoading, setIsLoading] = useState(false)

    const masks = {

        code: {
            unmask: (value) => {
                const mask = IMask.createPipe({
                        mask: '0-000-000'
                    },
                    IMask.PIPE_TYPE.MASKED,
                    IMask.PIPE_TYPE.UNMASKED
                );

                return mask(value);
            },

            mask: (value) => {
                const mask = IMask.createPipe({
                    mask: '0-000-000'
                },
                IMask.PIPE_TYPE.MASKED,
                // IMask.PIPE_TYPE.UNMASKED
            );

            return mask(value);
            }
        },

        phoneNumber: {
            unmask: (value) => {
                const mask = IMask.createPipe({
                        mask: '+{7} (000) 000-00-00'
                    },
                    IMask.PIPE_TYPE.MASKED,
                    IMask.PIPE_TYPE.UNMASKED
                );

                return mask(value);
            },

            mask: (value) => {
                const mask = IMask.createPipe({
                        mask: '+{7} (000) 000-00-00',
                        // lazy: false,
                    },
                    // IMask.PIPE_TYPE.UNMASKED,
                    IMask.PIPE_TYPE.MASKED
                );

                return mask(value);
            }
        }



    }
    // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const schema = yup.object().shape({
        userName: yup.string().matches(/^([^0-9]*)$/, "В поле не должно быть цифр").required("Заполните имя").max(20, "Имя слишком длинное").min(3, "Имя слишком короткое"),
        userPhone: yup.string().transform( value => {
            return masks.phoneNumber.unmask(value);
        }).min(11, "Телефон слишком короткий")
        .required("Введите номер телефона"),
        userNumber: yup.string().transform( value => {
            return masks.code.unmask(value);
        })
        .min(7, "Номер купона слишком короткий")
        // .max(7, "Номер купона слишком длинный")
        .typeError('Введите номер купона')
        .required("Введите номер купона")
    });

    const {register, handleSubmit, errors, clearErrors, control} = useForm({
        mode: 'onBlur',
        // defaultValues: {userName: "User", userPhone:"79506602664", userNumber: "00000" },
        resolver: yupResolver(schema)
    });
    const smsCode = generateCode();
    const onSubmit = values => {
        // console.log("onSubmit", values);
        setIsLoading(true)

        //отправка кода SMS
        api.sendSms(values.userPhone, smsCode).then( res => {
            if(res?.msg?.text === 'OK') {
                setValues({
                    user: {...values,
                        userNumber: String(values.userNumber).replace(/-/g, ''),
                        date: convertDateToString(new Date())
                    },
                    smsCode: smsCode,
                });
                setIsLoading(false)
                history.push('/add/step-2');
            }else {
                history.push('/add/error');
            }
        });

        //Отправка звонка
        // api.initCall(values.userPhone, values.userName, smsCode).then( res => {
        //
        //     // console.log("res", res)
        //     if(res?.status) {
        //         setValues({
        //             user: {...values,
        //                 userNumber: String(values.userNumber).replace(/-/g, ''),
        //                 date: convertDateToString(new Date())
        //             },
        //             smsCode: smsCode,
        //             uid: res?.ucaller_id
        //         });
        //
        //         setIsLoading(false)
        //         history.push('/add/step-2');
        //     }else {
        //         // api.initRepeat(res?.ucaller_id).then( res => {
        //         //     console.log("res", res)
        //         //     // const response = JSON.parse(res)
        //         //     setIsLoading(false)
        //         //     // response.status ? history.push('/add/step-2') : history.push('/add/error');
        //         // });
        //         history.push('/add/error');
        //     }
        //
        //     // res.status ? history.push('/add/step-2') : history.push('/add/error');
        // });

        //Повтор звонка
        // api.initRepeat(values.userPhone, values.userName, smsCode).then( res => {
        //     console.log("res", res)
        //     // const response = JSON.parse(res)
        //     setIsLoading(false)
        //     // response.status ? history.push('/add/step-2') : history.push('/add/error');
        // });


    }

    const normalizePhoneNumber = (value) => {
        return masks.phoneNumber.mask(value);
        // return value.replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, "")
    }
    const normalizeCheckNumber = (value) => {
        return masks.code.mask(value);
    }

    return (
        <>
        <h3 className="c-title c-title--h3">Добавить купон</h3>
        <div className="c-grid c-grid--beetwen">
            <div className="c-grid-col">
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
                            placeholder="+7 (___) ___-__-__"
                            onChange={event => {
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
                        <label className="c-label" htmlFor="">Номер купона</label>
                        <input
                            type="text"
                            ref={register}
                            placeholder="0-000-000"
                            autoComplete="off"
                            inputMode="numeric"
                            className={errors.userNumber ? "c-input error" : "c-input"}
                            name="userNumber"
                            onChange={event => {
                                event.target.value = normalizeCheckNumber(event.target.value);
                            }}
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
                    <div className="c-form-policy">
                        Согласие с условиями <a className="c-link" href="https://pizzapresto.ru/privacy" target="_blank">обработки персональных данных</a> и правилами розыгрыша.
                    </div>
                    </div>
                    <div className="c-form__item">
                        <div className="c-btn-layout">
                            <button
                                onClick={() => {
                                    clearErrors();
                                }}
                                disabled={isLoading}
                                style={{minWidth: "210px"}}
                                className="c-btn large c-btn--primary"
                            >
                                <span>{isLoading ? "Отправление..." : "Добавить"}</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/*<div className="c-grid-col c-grid-col-6">*/}
            {/*    <div className="c-form-img">*/}
            {/*        <img src={imgCashReceipt} alt=""/>*/}
            {/*    </div>  */}
            {/*</div>    */}
        </div>

        </>
    )
}

export default FormAdd;