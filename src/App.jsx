import ImageGallery from "./components/imageGallery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Galeria de Fotografia</h1>
      <p>
        Descubre una coleccion curada de fotografias excepcionales de talentosos
        <br />
        artistas de todo el mundo
      </p>
      <div className="gallery">
        <ImageGallery />
      </div>
    </div>
  );
}

export default App;
