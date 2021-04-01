import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.pizzapresto.ru/v1',
    headers: {'Content-Type': 'application/json'}
  });

export const api = {

    sendSms: ( smsPhone, smsCode ) => {
        const smsLogin = "pizzapresto";
        const smsPassword = "Presto*2020";
        const smsMessage = `${smsCode} — ваш одноразовый код подтверждения Клан Престо`;

        let formData = new FormData();
            formData.append("smsLogin", smsLogin);
            formData.append("smsPassword", smsPassword);
            formData.append("smsPhone", smsPhone);
            formData.append("smsMessage", smsMessage);

        return instance.post('/sms/', formData).then(res => {
            return res.data;
        });       
    },

    addUser: (data) => {

        let formData = new FormData();
        const user = data.user;
        for(const item in user) {
            formData.append(item, user[item]);
        }
        //return status = true
        return instance.post("/add-user/", formData).then(res => {
            return res.data;
        }) 
    }
}
