import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { createAccesToken } from '../libs/jwt.js';
import Role from "../models/role.model.js";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password, roles } = req.body
  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: ["Ya estas registrado con este email"],
      });
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "alumno" });
      newUser.roles = [role._id];
    }

    const userSaved = await newUser.save();
    console.log(userSaved);
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      firsName: userSaved.firstName,
      lastName: userSaved.lastName,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      update: userSaved.updatedAt,

    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email }).populate('roles');
    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });
    console.log(userFound)//
    const isMatch = await bcrypt.compare(password, userFound.password); //no fUnciona con await
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccesToken({ id: userFound._id, roles: userFound.roles });

    res.cookie("token", token)
    res.json({
      id: userFound._id,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
      roles: userFound.roles,
      createAt: userFound.createdAt,
      update: userFound.updatedAt,

    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);
    const userFound = await User.findById(user.id).populate('roles');
    if (!userFound) return res.sendStatus(401);
    return res.json({
      id: userFound._id,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
      roles: userFound.roles,
      email: userFound.email,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

