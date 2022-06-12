import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

// generate token
const generateToken = (id, email) =>
    jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
// register
export const register = async (req, res) => {
    const { username, email, password, cp } = req.body;
    const findUser = await UserModel.findOne({ email });
    findUser
        ? res.status(400).json({ message: "user already exists" })
        : bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(password, salt, async (err, hash) => {
                  if (password === cp) {
                      const user = await UserModel.create({
                          username,
                          email,
                          password: hash,
                      });
                      user
                          ? res.status(201).json({
                                token: generateToken(user._id, user.email),
                            })
                          : res
                                .status(500)
                                .json({ message: "something wrong" });
                  } else {
                      res.status(400).json({
                          message: "password doesn't match",
                      });
                  }
              });
          });
};
// login
export const login = async (req, res) => {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email });
    !findUser
        ? res.status(404).json({ message: "user doesn't exists" })
        : bcrypt.compare(password, findUser.password).then((result) =>
              result
                  ? res.status(200).json({
                        user: findUser.email,
                        token: generateToken(findUser._id, findUser.email),
                    })
                  : res.status(400).json({ message: "invalid password" })
          );
};
