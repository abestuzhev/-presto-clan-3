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

            // return axios.get("https://api.ucaller.ru/v1.0/initCall?phone=79506602664&code=9999&client=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9&voice=false&key=HOoDBYrZ212hghM8moGeCvfyat4dxb2z&service_id=871584")
            // const response = await axios.post("https://api.ucaller.ru/v1.0/initCall", {
            //     phone: Number(phone), // 79001000010
            //     code: code,
            //     client: name,
            //     voice: true
            // }, {
            //     headers: {'X-Requested-With': 'XMLHttpRequest'},
            //     Authorization: "Bearer HOoDBYrZ212hghM8moGeCvfyat4dxb2z.871584"
            // })

            // response structure{
            //     "status": true,
            //         "ucaller_id": 21046728,
            //         "phone": "7950***2664",
            //         "code": "9999",
            //         "client": "Алексей"
            // }

            // return response.data;

        }catch(e) {
            console.error(e)
        }

    },

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
