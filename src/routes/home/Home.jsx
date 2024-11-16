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
              <div class="badge badge-success bg-opacity-65 gap-2">
                Entrega N°3
              </div>
            </h1>
            <article className="prose !max-w-none">
              <p>
                Esta es la implementación del grupo *"El Byte del Fondo"* del
                Proyecto Práctico de Aplicación Integrador (PPAI):
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
                  Nuestra implementación está enfocada únicamente en el Caso de
                  Uso N°5:{" "}
                  <code className="kbd kbd-xs">
                    Importar Actualización de Vinos de Bodega
                  </code>
                  , y se encuentran implementados tanto el flujo primario como
                  los flujos alternativos de{" "}
                  <u>selección de múltiples bodegas</u> y{" "}
                  <u>el sistema externo no da respuesta</u>. Por esta razón,
                  algunas funcionalidades pueden ser limitadas.
                </span>
              </div>
              <h4>Presentación</h4>
              <ul className="list-none list-inside">
                <li>
                  Docentes
                  <ul className="list-disc list-inside">
                    <li>German Vélez</li>
                    <li>María Sol Vega</li>
                    <li>Federico Mizzau Anadón</li>
                  </ul>
                </li>
              </ul>

              <h4>Sobre la implementación</h4>
              <p>
                Nuestra implementación de Bonvino consta de una aplicación web
                responsive (según requerimientos no funcionales) para el
                frontend, que está programada en JavaScript usando React. El
                servidor de backend que da soporte a esta App Web corre en Java
                y usa <b>Spring Boot</b> con <b>SQLite</b> para manejar las
                consultas de los clientes. Es en este backend donde están
                implementadas todas las clases que contienen la lógica de
                negocio que modelamos previamente. <br />
                <blockquote>
                  Elegimos este stack para programar nuestra solución ya que son
                  las tecnologías que estamos aprendiendo a usar en la materia
                  Backend de Aplicaciones y, por lo tanto, con las que nos
                  encontramos más familiarizados. Además, consideramos que son
                  tecnologías líderes en la industria y muy frecuentemente
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
