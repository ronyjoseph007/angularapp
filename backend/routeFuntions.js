const req = require('express/lib/request');
const peopleMod = require('./models/peoples');

module.exports = {
    createPerson: async (req, res) => {
        console.log(req.body, 'repepepe');

        const email = await peopleMod.find({ email: req.body.email });

        console.log(email + '4444');
        if (email[0] !== undefined) {
            res.send('This email already exists');
        } else {
            const people = new peopleMod({
                email: req.body.email,
                password: req.body.password,
            });

            await people.save((err) => {
                if (err) {
                    res.send('failed');
                    console.log(err + 'oppss');
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            });
        }
    },

    loginUser: async (req, res) => {
        const data = await peopleMod.find({ email: req.body.email });

        if (data[0] === undefined) {
            res.send('invalid login');
        } else {
            if (data[0].password === req.body.password) {
                await peopleMod.findOneAndUpdate(
                    { email: req.body.email },
                    { loggedin: true }
                );
                res.status(200).json({ status: 'ok' });
            } else {
                res.status(200).json({ status: 'login failed' });
            }
        }
    },

    getUserData: async (req, res) => {
        const data = await peopleMod.find({
            email: req.body.email,
            password: req.body.password,
        });

        if (data[0] === undefined) {
            res.send('this user not exists');
        } else {
            if (data[0].loggedin === true) {
                res.send(data[0]);
            } else {
                res.send('user not logined');
            }
        }
    },

    updateUser: async (req, res) => {
        console.log('99999999');
        const data = await peopleMod.find({
            password: req.body.password,
            email: req.body.email,
        });

        if (data[0] === undefined) {
            res.send('invalid user');
        } else {
            if (data[0].loggedin === true) {
                await peopleMod.findOneAndUpdate(
                    { email: req.body.email },
                    { password: req.body.newPassword }
                );
                res.status(200).json({ status: 'updated successfully' });
            } else {
                res.send('user not logined');
            }
        }
    },
};
