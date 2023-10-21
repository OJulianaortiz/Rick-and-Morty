const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  let { id } = req.params;

  try {
    if (id) {
      await Favorite.destroy({
        where: { id },
      });

      const favs = await Favorite.findAll();
      return res.status(201).json(favs);
    }
    return res.status(401).json({ message: "Faltan datos" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = deleteFav;
