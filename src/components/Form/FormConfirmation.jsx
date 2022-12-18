import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import { useData } from "../../DataContext";
import Timer from "../Timer/Timer";

export const FormConfirmation = () => {
    const history = useHistory();
    const {data, setValues} = useData();
    const {register, handleSubmit, errors, clearErrors, } = useForm({
        mode: 'all',
    });

    const onSubmit = (values) => {
        
        if(Number(values.userConfirmation) === data.smsCode){
            api.addUser(data).then( res => {
                if(res){
                    history.push('/add/success');
                }else {
                    history.push('/add/error');
                }
            });
            
        }else {
            history.push('/add/error');
        }
    }

    return (
        <div className="confirmation">
            <h3 className="c-title c-title--h3">Код подтверждения</h3>
            <form action="" className="c-form" onSubmit={handleSubmit(onSubmit)}>
                
                <div className="c-form__item">
                    {/*<label className="c-label" htmlFor="">Код подтверждения </label>*/}
                    <div className="c-label">Введите последние 4-е цифры номера телефона</div>
                    <input
                        type="number"
                        ref={register({required: true, minLength: 4, maxLength: 4, validate: (value) => { return Number(value) === data.smsCode}})}
                        placeholder="0000"
                        autoComplete="off"
                        inputMode="numeric"
                        className={errors.userConfirmation ? "c-input error" : "c-input"}
                        name="userConfirmation"
                        // onChange={ event => {                            
                        //     validateCode(event.target.value);
                        // }}
                    />
                    {errors.userConfirmation && <span className="c-form-error">Введите корректный код </span>}
                </div>
                <Timer />
                <div className="c-form__item">
                    <div className="c-btn-layout">
                       
                        <button
                            onClick={() => clearErrors()}
                            className="c-btn large c-btn--primary"
                        >Зарегистрировать купон</button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}