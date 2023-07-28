const fetchItems = async (id) => {
  const tipo = document.querySelector(".main__filtros .btn--active").id;

  try {
    const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=b07dda1337fcfe0e08af7d3d2597908c&language=es-MX`;

    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    return datos;
  } catch (error) {
    console.log(error);
  }
};
export default fetchItems;
