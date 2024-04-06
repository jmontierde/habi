import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Fill out the require" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) return res.status(404).json({ message: "Invalid Credentials!" });

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    res.status(401).json({ message: "Invalid Credentials!" });

  const age = 1000 * 60 * 60 * 24 * 7;

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT__SECRET_KEY,
    { expiresIn: age }
  );

  const { password: userPassword, ...userInfo } = user;

  res
    .cookie("token", token, {
      httpOnly: true,
      // secure:true,
      maxAge: age,
    })
    .status(200)
    .json(userInfo);
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
