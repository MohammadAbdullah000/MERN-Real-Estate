import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ 'Message': "User created succesfully" })
    } catch (error) {
        // res.status(500).json(error.message)
        // in production we dont everytime do above line for error, make middleware for errro in index.js and if you want to show error like psswor lenfth is not strong means custom error then create utils folder
        next(error)
    }
}
// export { signup }