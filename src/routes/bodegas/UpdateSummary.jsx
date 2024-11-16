import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function UpdateSummary() {
  const location = useLocation();
  // Proporcionamos valores por defecto para evitar undefined
  const { actualizaciones = [], cantidadBodegasActualizadas = 0 } =
    location.state || {};

  // Solo mostramos los toast si hay actualizaciones
  if (actualizaciones.length > 0) {
    toast.success(
      `¡La importación de actualización de ${cantidadBodegasActualizadas} ${
        cantidadBodegasActualizadas === 1 ? "bodega" : "bodegas"
      } fue exitosa!`,
      {
        id: "success-updated",
      }
    );
    toast.success("Se notificó a los enófilos seguidores de las bodegas...", {
      id: "success-notified",
    });
  }

  // Si no hay datos, mostramos un mensaje
  if (!location.state || actualizaciones.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-bold mb-4">
          No hay datos de actualización disponibles
        </h2>
        <p>Por favor, realiza una actualización de bodegas primero.</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Bonvino</a>
          </li>
          <li>
            <a>Gestión de Bodegas</a>
          </li>
          <li>
            <a>Modificar</a>
          </li>
          <li>
            <a>Importar Actualización Vinos de Bodega</a>
          </li>
          <li>Resumen de Importación</li>
        </ul>
      </div>
      <div className="mt-10">
        <div className="card w-full bg-base-100 shadow-xl mb-14">
          <div className="card-body">
            <h2 className="card-title">Resumen de Importación</h2>
            <p className="mb-6">
              La importación de la actualización para las{" "}
              {cantidadBodegasActualizadas}{" "}
              {cantidadBodegasActualizadas === 1 ? "bodega" : "bodegas"}{" "}
              seleccionadas fue <u>exitosa</u> 🥳, a continuación tenés un
              resumen de las novedades:
            </p>

            {actualizaciones.map((actualizacion) => (
              <div
                className="collapse collapse-plus bg-base-200 mb-4"
                key={actualizacion.bodega.id}
              >
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-auto rounded-lg">
                      <div className="w-12 flex h-auto rounded-lg">
                        <img
                          src={actualizacion.bodega.imgLogoBodega}
                          className="!object-fit rounded-lg"
                          alt={`Logo ${actualizacion.bodega.nombre}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {actualizacion.bodega.nombre}
                      </div>
                    </div>
                    <div className="badge badge-sm badge-outline">
                      {actualizacion.updates.length} update
                      {actualizacion.updates.length > 1 && "s"}
                    </div>
                  </div>
                </div>
                <div className="collapse-content">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Img.</th>
                          <th>Nombre Vino</th>
                          <th>Varietal</th>
                          <th>Precio($)</th>
                          <th>Nota de Cata</th>
                          <th>Tipo Update</th>
                        </tr>
                      </thead>
                      <tbody>
                        {actualizacion.updates.map((vino, index) => (
                          <tr key={index}>
                            <th>{index + 1}</th>
                            <td className="w-min pr-0 mr-0">
                              <img
                                src={vino.imgEtiqueta}
                                className="w-4"
                                alt={vino.nombre}
                              />
                            </td>
                            <td>{vino.nombre}</td>
                            <td>{vino.varietal}</td>
                            <td>{vino.precio}</td>
                            <td>
                              <div className="flex items-center">
                                <svg
                                  className="w-4 h-4 text-yellow-400 me-1"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 20"
                                >
                                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="ms-2 font-bold text-gray-900">
                                  {vino.notaDeCata}
                                </p>
                              </div>
                            </td>
                            <td>
                              {vino.tipoUpdate === "actualizacion" ? (
                                <div className="badge badge-warning bg-opacity-65 gap-2">
                                  {vino.tipoUpdate}
                                </div>
                              ) : (
                                <div className="badge badge-success bg-opacity-65 gap-2">
                                  {vino.tipoUpdate}
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateSummary;
