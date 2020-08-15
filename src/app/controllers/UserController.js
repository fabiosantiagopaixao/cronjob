import Queue from '../lib/Queue';

export default {
    async store(req, res) {
        const { name, email, password } = req.body;

        const user = {
            name,
            email,
            password,
        };

        // Add job
        await Queue.add('SendMessage', { user });

        return res.json(user);
    }
};