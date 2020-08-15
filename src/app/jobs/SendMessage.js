import Mail from '../lib/Mail';

export default {
    key: 'SendMessage',
    async handle() {
        //async handle({data}) {
        //const { object } = data;

        console.log("Teste");

        await Mail.sendMail({
            from: 'fabio.santiago99@gmail.com',
            to: `Fábio <fabio.santiago99@hotmail.com>`,
            subject: 'Hello',
            html: `Hello, Fábio, this is a message test`
        });
    },
};