import { useState, useEffect } from "react";

const titulosPaisajes = [
  "Amanecer Dorado",
  "Montañas Lejanas",
  "Río de Cristal",
  "Pradera Verde",
  "Cielo Abierto",
  "Reflejo Natural",
  "Camino Solitario",
  "Horizonte Azul",
  "Cascada Escondida",
  "Desierto Silencioso",
];

function ImageGallery() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/search?query=landscape&per_page=10", {
      headers: {
        Authorization:
          "KXjXA9ZFncEu9C9ZRJuqS6SDALyNXQQ87oEYzGeMFFvSIfGArY8urbqb",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const imagenesFormateadas = data.photos.map((foto) => ({
          id: foto.id,
          url: foto.src.landscape,
          autor: foto.photographer,
        }));
        setImagenes(imagenesFormateadas);
      });
  }, []);

  return (
    <div className="container">
      {imagenes.map((img) => (
        <div key={img.id} className="card">
          <img src={img.url} alt={img.autor} />
          <div className="title">
            <h3>
              {
                titulosPaisajes[
                  Math.floor(Math.random() * titulosPaisajes.length)
                ]
              }
            </h3>
            <p>{img.autor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
