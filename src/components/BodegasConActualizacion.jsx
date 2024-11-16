import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SyncServerImg from "/svgs/syncServer.svg";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_BONVINO_API_URL;

function BodegasConActualizacion({ bodegas = [] }) {
  const bodegasData = bodegas || [];

  const initialBodegasSel = bodegasData.map((bodega) => {
    return {
      id: bodega.id,
      nombre: bodega.nombre,
      seleccionada: false,
    };
  });

  const [bodegasSel, setBodegasSel] = useState(initialBodegasSel);
  const [selAllVal, setSelectAllVal] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const countSeleccionados = bodegasSel.reduce((acc, bodega) => {
    return bodega.seleccionada ? acc + 1 : acc;
  }, 0);

  const handleSel = (idBodega) => {
    const updatedBodegasSel = bodegasSel.map((bodega) => {
      if (bodega.id === idBodega) {
        return { ...bodega, seleccionada: !bodega.seleccionada };
      }
      return bodega;
    });
    setBodegasSel(updatedBodegasSel);
  };

  const handleSelAll = () => {
    const updatedBodegasSel = bodegasSel.map((bodega) => {
      if (selAllVal) {
        return { ...bodega, seleccionada: false };
      }
      return { ...bodega, seleccionada: true };
    });
    setBodegasSel(updatedBodegasSel);
    setSelectAllVal(!selAllVal);
  };

  const findSelValue = (idBodega) => {
    const sel = bodegasSel.find((bodega) => bodega.id === idBodega);
    return sel?.seleccionada || false;
  };

  const tomarBodegasSeleccionadas = async () => {
    const bodegasNombres = bodegasSel
      .filter((bodega) => bodega.seleccionada === true)
      .map((bodega) => bodega.nombre);

    try {
      const response = await fetch(
        `${apiUrl}/bodegas/actualizar-vinos-bodega/actualizar-bodegas`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodegasNombres),
        }
      );

      if (!response.ok) {
        const msg = await response.json();
        toast.error(msg.error, {
          id: "server-post-error",
        });
        throw new Error(msg);
      }

      const responseData = await response.json();
      setData(responseData);

      // Aquí está el cambio principal - pasar los datos en el formato correcto
      navigate("/bodegas/actualizar-remoto-summary", {
        state: {
          actualizaciones: responseData.actualizaciones,
          cantidadBodegasActualizadas: responseData.cantidadBodegasActualizadas,
        },
      });
    } catch (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
      toast.error("Hubo un error al procesar la actualización", {
        id: "error-update",
      });
    }
  };

  return (
    <>
      {bodegasData.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <p>
              Las siguientes bodegas presentan actualizaciones pendientes de
              incorporar, selecciona al menos una y da click en el boton de
              <kbd className="kbd kbd-xs">Importar Actualizacion</kbd> para
              importar las novedades...
            </p>
            <div className="divider"></div>
            <table className="table mt-5 w-full">
              <thead className="hidden lg:table-header-group">
                <tr>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={selAllVal}
                        onChange={() => handleSelAll()}
                      />
                    </label>
                  </th>
                  <th>Nombre</th>
                  <th>Coordenadas</th>
                  <th>Sitio Web</th>
                </tr>
              </thead>
              <tbody>
                {bodegasData.map((bodega) => (
                  <tr
                    key={bodega.id}
                    className={`block lg:table-row mb-4 lg:mb-0 p-4 lg:p-0 rounded-lg lg:rounded-none ${
                      findSelValue(bodega.id) &&
                      "border-2 border-gray-500 lg:border-gray-100 lg:border-b lg:border-r-0 lg:border-l-0 lg:border-t-0"
                    } bg-base-200 lg:bg-transparent cursor-pointer`}
                    onClick={() => handleSel(bodega.id)}
                  >
                    <th className="hidden md:block lg:table-cel">
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={findSelValue(bodega.id)}
                          onChange={() => handleSel(bodega.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </label>
                    </th>
                    <td className="block lg:table-cell !p-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-auto rounded-lg">
                          <div className="w-12 flex h-auto rounded-lg">
                            <img
                              src={bodega.imgLogoBodega}
                              className="!object-contain mt-auto mb-auto"
                              alt={`Logo ${bodega.nombre}`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bodega.nombre}</div>
                          <div className="text-sm opacity-50">Argentina</div>
                        </div>
                      </div>
                    </td>
                    <td className="block lg:table-cell !p-0 mt-2 text-right md:text-left">
                      <span className="!badge !badge-primary !badge-sm block">
                        {`${bodega.coordenadas.lat} ${bodega.coordenadas.lng}`}
                      </span>
                    </td>
                    <td className="block lg:table-cell !p-0 mt-2 text-right md:text-left">
                      {bodega.sitioWeb && (
                        <a
                          className="btn btn-primary md:btn-ghost btn-xs"
                          href={bodega.sitioWeb}
                          target="blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          sitio web
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-footer-group">
                <tr>
                  <th>{countSeleccionados} seleccionadas</th>
                  <th className="hidden md:table-cell"></th>
                  <th className="hidden md:table-cell"></th>
                  <th className="hidden md:table-cell">
                    Mostrando {bodegasData.length} de {bodegasData.length}
                  </th>
                </tr>
              </tfoot>
            </table>
            <div className="divider"></div>
            <div className="w-full flex mt-5">
              {countSeleccionados === 0 ? (
                <>
                  <div
                    className="tooltip tooltip-left ml-auto hidden md:block"
                    data-tip="selecciona al menos una bodega"
                  >
                    <button
                      className="btn btn-primary ml-auto !w-full"
                      disabled={true}
                    >
                      Importar Actualizacion
                    </button>
                  </div>
                  <button
                    className="btn btn-primary ml-auto !w-full md:hidden"
                    disabled={true}
                  >
                    Importar Actualizacion
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary ml-auto !w-full md:!w-auto"
                  onClick={tomarBodegasSeleccionadas}
                >
                  Importar Actualizacion
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <img src={SyncServerImg} alt="" className="w-24 ml-auto mr-auto" />
          <h3 className="italic text-gray-400 mt-8">
            No hay bodegas con actualizaciones pendientes de importar...
          </h3>
        </div>
      )}
    </>
  );
}

export default BodegasConActualizacion;
