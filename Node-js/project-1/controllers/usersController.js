const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {
  try {
    const userList = await UserModel.findAll();
    console.log(userList);
    res.render("users", { userList });
  } catch (error) {
    res.send("An error accured");
  }
};

// get req

exports.show_add_user_form = (req, res) => {
  res.render("addUser");
};

//post req
exports.add_user = async (req, res) => {
  try {
    const newUser = await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    res.redirect("/users");
  } catch {
    (error) => {
      res.send("An error accured ");
    };
  }
};

// get req for delete , bunu delete ile yapmiyoruz cunku form icerinde degil

exports.delete_user = async (req, res) => {
  try {
    await UserModel.destroy({
      where: {
        id: req.params.id,
      },
      
    });
    res.redirect("/users");
  } catch {
    (error) => {
      res.send("an Error acuured");
    };
  }
};

//edit 

exports.show_edit_user_form = (req, res) => {

  res.render("editUser", {firstName: req.params.firstName, lastName:req.params.lastName})
}
  
exports.edit_user = async (req, res) => {
  try {
    await UserModel.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName
      
    }, 
    {
      where: {
        id : req.params.id
      }
    }
    )
    res.redirect("/users")
  } catch (error) {
    console.log("error", error)
  }
}