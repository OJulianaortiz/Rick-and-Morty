const { Favorite } = require("../DB_connection");
const postFav = async (req, res) => {
  let { name, origin, status, image, species, gender } = req.body;
  try {
    if (name && origin && status && image && species && gender) {
      await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
      });
      const favs = await Favorite.findAll();
      return res.status(201).json(favs);
    }
    return res.status(201).json(favs);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = postFav;
