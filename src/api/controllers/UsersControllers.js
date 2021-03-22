const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const { registrationValidation } = require("../validations/User");

// * /api/register
const registrationController = async (req, res) => {
  const validatedData = await registrationValidation(req, res);
  //   console.log(validatedData);
  const { username, email, password } = validatedData.value;
  if (validatedData.error) {
    return res.status(400).json(validatedData.error.message);
  }

  const emailExist = await User.findOne({ email: email });
  if (emailExist) {
    return res.status(400).send({ message: "Email already exist" });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPass,
  });

  try {
    const data = await user.save();
    res.status(200).json({ message: "Success", data });
  } catch (err) {
    res.status(400).json({ message: "Account is not created", err });
  }

  res.end();
};

module.exports = {
  registrationController,
};
