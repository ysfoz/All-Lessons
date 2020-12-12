const User = require('../models/UserModel')
const bcrypt =require('bcryptjs')

exports.authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(
      "Fields:",
      firstName,
      lastName,
      email,
      password
    );
    // TODO1: Validate the fields
    // TODO2: check already registered
    // TODO3: crpyt password
    // TODO4: save the user to DB

    const salt = await bcrypt.genSalt(10)
    const newPassword = await bcrypt.hash(password,salt)

    const user = new User ({
      firstName,
      lastName,
      email,
      password:newPassword
    });
    await user.save();
    res.send("Register Completed.");
  };
  
  exports.authLogin = (req, res) => {
    // TODO: Auth.
    // TODO: Login func.
    res.send("Login Completed");
  };
  