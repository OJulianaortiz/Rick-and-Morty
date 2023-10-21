const User = require("../utils/users");

const login = async (req, res) => {
  // obetenemos datos de emial y password, desde la consulta al query
  // es hacer destructuring para quedarme con la propiedad!!
  const { email, password } = req.query;
  // verificamos si los datos del array coinciden con los de query

  try {
    if (email && password) {
      const foundUser = await User.findOne({
        where: { email },
      });
      if (!foundUser)
        return res.status(404).json({ message: "Usuario no encontrado" });
      if (foundUser.password !== password)
        return res.status(403).json({ message: "Contraseña incorrecta" });
      return res.status(200).json({ access: true });
    }
    return res.status(200).json({ message: "Flatan datos" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = login;
