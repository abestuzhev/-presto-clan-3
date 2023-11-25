import React, {useEffect} from 'react';
import {api} from "../../api/api";
import {useData} from "../../DataContext";

const Timer = () => {
    const [counter, setCounter] = React.useState(30);
    const [showNotify, setShowNotify] = React.useState(false);
    const [notify, setNotify] = React.useState("Отправление...");
    const {data, setValues} = useData();

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    // useEffect( async () => {
    //     counter === 20 && await api.initRepeat(data.uid).then( res => {
    //          console.log("res", res)
    //     });
    // }, [counter])

    const sendSmsHandler = () => {
        //отправка кода SMS
        setShowNotify(true)
        api.sendSms(data.user.userPhone, data.smsCode).then( res => {
            if(res) {
                setNotify("Мы отправили СМС с кодом регистрации на ваш номер")
            }else {
                setNotify("Чо-то пошло не так. Повторите регистрацию или напишите нам на email help@pizzapresto.ru")
            }
        });
    }

    return (
        <div className="c-timer">
            {
                counter > 0
                ? <div className="c-timer__text">
                        Отправить повторно, через {counter} сек.
                    </div>
                : !showNotify && <button onClick={sendSmsHandler} className="c-timer__link">Отправить повторно</button>
            }
            {showNotify && <div className="c-timer__notify">{notify}</div>}
        </div>
    );
};

export default Timer;