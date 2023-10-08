const axios = require("axios");

async function getCharById(req, res) {
  try {
    const { id } = req.params; // Obtener el ID desde los parámetros de la solicitud
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    if (response.status === 200) {
      // Accede a los datos relevantes de la respuesta
      let { name, gender, species, origin, image, status } = response.data;

      // Crea un objeto con las propiedades deseadas
      let characterInfo = {
        id,
        name,
        gender,
        species,
        origin: origin.name, // Puedes acceder a la propiedad 'name' dentro de 'origin'
        image,
        status,
      };

      // manda la respuesta al Front-End con el objeto creado
      res.status(200).json(characterInfo);
    } else {
      // Manejar otros códigos de estado aquí si es necesario
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
}

module.exports = getCharById;
