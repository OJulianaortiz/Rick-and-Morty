const users = require("../utils/users");

const login = (req, res) => {
  // obetenemos datos de emial y password, desde la consulta al query
  // es hacer destructuring para quedarme con la propiedad!!
  const { email, password } = req.query;
  // verificamos si los datos del array coinciden con los de query
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = login;
