import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.pizzapresto.ru/v1',
    headers: {'Content-Type': 'application/json'}
  });

export const api = {

    initCall: async (phone, name, code) => {

        try {

            let formData = new FormData();
            formData.append("phone", phone);
            formData.append("code", code);
            formData.append("name", name);

            return instance.post('/call/', formData).then(res => {
                return res.data;
            });

            // response structure{
            //     "status": true,
            //         "ucaller_id": 21046728,
            //         "phone": "7950***0001",
            //         "code": "9999",
            //         "client": "name"
            // }

        }catch(e) {
            console.error(e)
        }

    },

    initRepeat: async (uid) => {

        try {

            let formData = new FormData();
            formData.append("uid", uid);

            return instance.post('/initRepeat/', formData).then(res => {
                return res.data;
            });


            // {
            //     "status": true,
            //     "ucaller_id": 103000,
            //     "phone": "7900***1010",
            //     "code": "1000",
            //     "client": "nickname",
            //     "unique_request_id": "f32d7ab0-2695-44ee-a20c-a34262a06b90",
            //     "exists": true,
            //     "free_repeated": true
            // }

        }catch(e) {
            console.error(e)
        }

    },

    sendOldSms: ( smsPhone, smsCode ) => {
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
    sendSms: ( smsPhone, smsCode ) => {
        const smsMessage = `${smsCode} — ваш одноразовый код подтверждения Клан Престо`;

        let formData = new FormData();
            formData.append("smsPhone", smsPhone);
            formData.append("smsMessage", smsMessage);

        return instance.post('/newSms/', formData).then(res => {
            return res.data?.response;
        });
    },

    getCities: () => {
        return instance.get("/cities/").then(res => {
            return res.data;
        })
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
