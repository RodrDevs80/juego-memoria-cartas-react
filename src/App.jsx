import { useEffect, useState } from "react";
import "./App.css";
import { cuadros } from "./data/datos";

function App() {
  const cuadrosJuntos = [...cuadros, ...cuadros];
  const cuadrosPrevios = cuadrosJuntos.map((cuadro) => ({
    imagen: cuadro,
    estado: 0,
  }));
  const [mensaje, setMensaje] = useState("");
  const [finalizado, setFinalizado] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const [misCuadros, setMisCuadros] = useState([]);
  const [misTiradas, setMisTiradas] = useState([]);

  const desordenar = (items) => {
    for (let i = items.length - 1; i > 0; i--) {
      const azar = (Math.random() * (i + 1)).toFixed();
      [items[azar], items[i]] = [items[i], items[azar]];
    }
    return items;
  };

  useEffect(() => {
    //algoritmo de Fisher-Yates para desordenar;

    setMisCuadros([...desordenar(cuadrosPrevios)]);
  }, []);
  const tapado = {
    backgroundImage: `url(https://www.html6.es/img/rey_.png)`,
  };
  const marcar = (e) => {
    const yaEncontrado = misCuadros[e].estado;
    const existe = misTiradas.find((tirada) => tirada.indice === e);
    if (misTiradas.length < 2 && !existe && yaEncontrado === 0) {
      setMisTiradas([
        ...misTiradas,
        {
          imagen: misCuadros[e].imagen,
          indice: e,
        },
      ]);
      const prevItem = [...misCuadros];
      prevItem[e].estado = 1;
      setMisCuadros(prevItem);
    }
  };
  useEffect(() => {
    if (misTiradas.length === 2) {
      setIntentos(intentos + 1);
      if (misTiradas[0].imagen === misTiradas[1].imagen) {
        setMisTiradas([]);
        setAciertos(aciertos + 1);
        if (aciertos + 1 >= cuadros.length) {
          setMensaje("Has acabado en Juego!!!");
          setFinalizado(true);
        }
      } else {
        setTimeout(() => {
          misTiradas.map((objeto) => {
            const temporal = [...misCuadros];
            temporal[objeto.indice].estado = 0;
            setMisCuadros(temporal);
            setMisTiradas([]);
          });
        }, 2000);
      }
    }
  }, [misTiradas]);
  const reiniciarJuego = () => {
    setAciertos(0);
    setIntentos(0);
    setFinalizado(false);
    setMisTiradas([]);
    setMisCuadros([...desordenar(cuadrosPrevios)]);
  };
  return (
    <>
      {finalizado && (
        <div className="panel">
          <div className="texto">
            <div className="mensaje">{mensaje}</div>
            <button onClick={reiniciarJuego}>Aceptar</button>
          </div>
        </div>
      )}
      <div className="cuadros">
        {misCuadros &&
          misCuadros.map((cuadro, indice) =>
            cuadro.estado === 0 ? (
              <div
                onClick={() => marcar(indice)}
                className="cuadro"
                key={indice}
                style={tapado}
              >
                <div className="atras">
                  <img
                    src="https://www.html6.es/img/naranja.png"
                    alt="naranja"
                  />
                </div>
              </div>
            ) : (
              <div
                onClick={() => marcar(indice)}
                className="cuadro"
                key={indice}
                style={{
                  backgroundImage: `url(${misCuadros[indice].imagen})`,
                }}
              >
                <div className="atras">
                  <img
                    src="https://www.html6.es/img/naranja.png"
                    alt="naranja"
                  />
                </div>
              </div>
            )
          )}
      </div>
      <div className="aciertos">
        {aciertos} aciertos de {intentos} intentos:{" "}
        {intentos > 0 && (
          <span className="intentos">
            ({((aciertos * 100) / intentos).toFixed()} % de acierto)
          </span>
        )}
      </div>
    </>
  );
}

export default App;
