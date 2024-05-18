import { useState } from "react";
import SyncServerImg from "/svgs/syncServer.svg";

function BodegasConActualizacion(props) {
  const bodegas = props.bodegas;
  const initialBodegasSel = bodegas.map((bodega) => {
    return {
      id: bodega.id,
      seleccionada: false,
    };
  });

  const [bodegasSel, setBodegasSel] = useState(initialBodegasSel);
  const [selAllVal, setSelectAllVal] = useState(false);

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
    const sel = bodegasSel.find((bodega) => bodega.id == idBodega);
    return sel.seleccionada;
  };

  return (
    <>
      {bodegas.length ? (
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
              {/* head */}
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
                {/* row 1 */}
                {bodegas.map((bodega) => (
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
                              src={`${bodega.imagenLogo}`}
                              className="!object-contain mt-auto mb-auto"
                              alt={`Logo ${bodega.nombre}`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{`${bodega.nombre}`}</div>
                          <div className="text-sm opacity-50">
                            {`${bodega.pais}`}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="block lg:table-cell !p-0 mt-2 text-right">
                      <span className="!badge !badge-primary !badge-sm block">
                        -24.324231W 67.213234S
                      </span>
                    </td>
                    <td className="block lg:table-cell !p-0 mt-2 text-right">
                      {bodega.sitioWeb.length ? (
                        <a
                          className="btn btn-primary md:btn-ghost btn-xs"
                          href={`${bodega.sitioWeb}`}
                          target="blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          sitio web
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot className="table-footer-group">
                <tr>
                  <th>{countSeleccionados} seleccionadas</th>
                  <th className="hidden md:table-cell"></th>
                  <th className="hidden md:table-cell"></th>
                  <th className="hidden md:table-cell">
                    Mostrando {bodegas.length} de {bodegas.length}
                  </th>
                </tr>
              </tfoot>
            </table>
            <div className="divider"></div>
            <div className="w-full flex mt-5">
              {countSeleccionados == 0 ? (
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
                <button className="btn btn-primary ml-auto !w-full md:!w-auto">
                  Importar Actualizacion
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <img
            src={SyncServerImg}
            alt=""
            srcset=""
            className="w-24 ml-auto mr-auto"
          />
          <h3 className="italic text-gray-400 mt-8">
            No hay bodegas con actualizaciones pendientes de importar...
          </h3>
        </div>
      )}
    </>
  );
}

export default BodegasConActualizacion;
