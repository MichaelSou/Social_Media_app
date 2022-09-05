import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";




import UserMod from '../models/users.js';


const secret = 'secretSHHHH';

export const signUp = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const userexist = await UserMod.findOne({ email });

        if (userexist) {return res.status(400).json({ message: "User already exists!" })};

        const hashPass = await bcrypt.hash(password, 12);

        const newUser = await UserMod.create({ email: email, password: hashPass, firstname: firstname, lastname: lastname});

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret, { expiresIn: "12h" } )

        res.status(201).json({ result: newUser, token });


    } catch (error) {
        res.status(500).send({ message: "Something went wrong!" });

        console.log(error);
    }


};


export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userexist = await UserMod.findOne({ email });
        if (!userexist) {return res.status(400).json({ message: "Wrong pass or email " })};
    
        const isPasswordCorrect = await bcrypt.compare(password, userexist.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Wrong pass or email " });

        const token = jwt.sign({ email: userexist.email, id: userexist._id }, secret, { expiresIn: "12h" } )

        res.status(200).json({ result: userexist, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });

        console.log(error);
    }
};