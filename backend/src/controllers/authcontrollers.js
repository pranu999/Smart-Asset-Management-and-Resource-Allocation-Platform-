const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
} = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    findUserByEmail(email, async (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

      createUser(
        name,
        email,
        hashedPassword,
        role || "USER",
        (err, result) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(201).json({
            message: "User Registered Successfully",
          });
        }
      );
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = (req, res) => {
  const {
    email,
    password,
  } = req.body;

  findUserByEmail(email, async (err, result) => {
    if (result.length === 0) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const user = result[0];

    const match =
      await bcrypt.compare(
        password,
        user.password_hash
      );

    if (!match) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      token,
      role: user.role,
      name: user.name,
    });
  });
};