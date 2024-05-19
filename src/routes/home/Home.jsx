import { CodeBlock, dracula } from "react-code-blocks";
function Home() {
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Bonvino</a>
          </li>
          <li>
            <a>Home</a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <div className="card w-full md:w-9/12 md:ml-auto md:mr-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title">
              Bienvenido al Administrador de Bonvino
            </h1>
            <article className="prose !max-w-none">
              <p>
                Esta es la implementacion del Grupo "El Byte del Fondo" del
                Proyecto Practico de Aplicacion Integrador(PPAI):
              </p>
              <div role="alert" className="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-warning shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm">
                  Nuestra implementacion esta solamente enfocada en el Caso de
                  Uso N5:{" "}
                  <code className="kbd kbd-xs">
                    Importar Actualizacion de Vinos de Bodega`
                  </code>{" "}
                  y especificamente en el flujo primario,{" "}
                  <u>
                    que no contempla la seleccion de multiples bodegas para
                    actualizar
                  </u>
                  . Es por esto que algunas de las funcionalidades pueden ser
                  limitadas.
                </span>
              </div>
              <h4>Presentacion</h4>
              <ul className="list-none list-inside">
                <li>
                  Docentes
                  <ul className="list-disc list-inside">
                    {" "}
                    {/* Asegúrate de aplicar clases también a la lista anidada */}
                    <li>German Velez</li>
                    <li>Maria Sol Vega</li>
                    <li>Fede --apellido</li>
                  </ul>
                </li>
                <li>
                  Alumnos
                  <ul className="list-disc list-inside ">
                    {" "}
                    {/* Asegúrate de aplicar clases también a la lista anidada */}
                    <li>German Velez</li>
                    <li>Maria Sol Vega</li>
                    <li>Fede --apellido</li>
                  </ul>
                </li>
              </ul>

              <h4>Ejemplos de Codigo</h4>
              <p>
                Nuestra implementacion de Bonvino consta de una Aplicacion Web
                Responsive(segun requerimientos no funcionales) para el frontend
                que esta programada en JavaScript usando React. El servidor que
                da soporte a esta App Web corre en NodeJS y express para manejar
                las consultas de los clientes y es donde estan implementadas
                todas las clases que contienen la logica de control y de negocio
                que modelamos previamnete. <br />
                <blockquote>
                  Elegimos este Stack para programar nuestra solucion ya que son
                  las tecnologias que estamos aprendiendo a usar en la materia
                  Desarollo de Software y por lo tanto con las que nos
                  encontramos mas familizarizados. Ademas, consideramos que son
                  tecnologias lider en la industria y son muy frecuentemente
                  utilizazdas para dar solucion a problemas de software con
                  requerimientos similares a nuestro desafio.
                </blockquote>
                A continuacion se muestran algunos ejemplos del codigo que da
                soporte a las funciones principlaes de esta implementacion y que
                corre en el backend de Bonvino.
              </p>

              <h4>Clase Controlador</h4>
              <p>
                Implementa toda la logica de control del Caso de Uso y en
                terminos de programacion es la clase que contiene los dos
                metodos que se exponen mediante la API REST para ser consumidos
                por esta WebApp.
              </p>
            </article>
            <div className="w-11/12 ml-auto mr-auto mt-5">
              <CodeBlock
                text={`class ControladorImportarActualizacionVB {
                  // ... Codigo previo que inicializa la clase
                
                  // Operaciones/Metodos Privados
                  #buscarBodegasConActualizacion() {
                    this.bodegasConActualizacion = [];
                    this.bodegas.forEach((bodega) => {
                      if (bodega.tieneActualizacion()) {
                        this.bodegasConActualizacion.push({
                          id: bodega.getNombre(),
                          nombre: bodega.getNombre(),
                          coordenadas: bodega.getCoordenadas(),
                          sitioWeb: bodega.getSitioWeb(),
                          imgLogoBodega: bodega.getImgLogoBodega(),
                        });
                      }
                    });
                    return this.bodegasConActualizacion;
                  }
                
                  #verificarSeleccionUnica() {
                    if (this.bodegasSeleccionadas.length == 1) {
                      return true;
                    }
                    return false;
                  }
                
                  #actualizarDatosBodega() {}
                
                  // Operaciones/Metodos Publicas
                  opcionImportarActualizacionVentana(req, res) {
                    res.status(200).json(this.#buscarBodegasConActualizacion());
                  }
                
                  tomarBodegasSeleccionadas(req, res) {
                    this.bodegasSeleccionadas = req.body.bodegasSeleccionadas;
                    if (this.#verificarSeleccionUnica()) {
                      this.#actualizarDatosBodega();
                    } else {
                      res.status(500).json({
                        error: "Este flujo del caso de uso no esta implementado.",
                      });
                    }
                  }
                }`}
                language={"javascript"}
                showLineNumbers={true}
                theme={dracula}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
