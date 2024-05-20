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
                    <li>Federico Mizzau Anadón</li>
                  </ul>
                </li>
              </ul>

              <h4>Sobre la implementacion</h4>
              <p>
                Nuestra implementación de Bonvino consta de una Aplicación Web
                Responsiva (según requerimientos no funcionales) para el
                frontend, que está programada en JavaScript usando React. El
                servidor que da soporte a esta App Web corre en Node.js y
                Express para manejar las consultas de los clientes, y es donde
                están implementadas todas las clases que contienen la lógica de
                control y de negocio que modelamos previamente. <br />
                <blockquote>
                  Elegimos este stack para programar nuestra solución ya que son
                  las tecnologías que estamos aprendiendo a usar en la materia
                  Desarrollo de Software y, por lo tanto, con las que nos
                  encontramos más familiarizados. Además, consideramos que son
                  tecnologías líderes en la industria y son muy frecuentemente
                  utilizadas para dar solución a problemas de software con
                  requerimientos similares a nuestro desafío.
                </blockquote>
                A continuación, se muestran algunos ejemplos del código que da
                soporte a las funciones principales de esta implementación y que
                corre en el backend de Bonvino.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
