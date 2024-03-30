import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
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
    console.log(error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  // if (!username || password) {
  //   res.status(400).json("Please enter email and password");
  //   return;
  // }

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

  res
    .cookie("token", token, {
      httpOnly: true,
      // secure: true
      maxAge: age,
    })
    .status(200)
    .json({ message: "Login successful" });

  // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
