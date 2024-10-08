import bcrypt from "bcryptjs"; // Ensure this is installed
import { userSchema as User } from "../model/user.model.js";

const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                // Sending Cookie
                res.cookie('userEmail', email, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 24 * 60 * 60 * 1000 // 1 day
                });
                return res.status(200).send({ message: "Login Successful" });
            } else {
                return res.status(404).send({ message: "Email or Password is Incorrect" });
            }
        } else {
            return res.status(404).send({ message: "Email or Password is Incorrect" });
        }
    } catch (error) {
        console.error("Error in loginController:", error);
        return res.status(500).send({ message: "Database Error", error });
    }
}

const signUpController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send({ message: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();
        return res.status(201).send({ message: "User Created Successfully" });

    } catch (error) {
        console.error("Error Creating User:", error);
        return res.status(500).send({ message: "Database Error" });
    }
}

export { loginController, signUpController };
