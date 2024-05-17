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
            <table className="table mt-5">
              {/* head */}
              <thead>
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
                  <th>Direccion</th>
                  <th>Sitio Web</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bodegas.map((bodega) => (
                  <tr key={bodega.id}>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={findSelValue(bodega.id)}
                          onChange={() => handleSel(bodega.id)}
                        />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="w-12 h-12">
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
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        -24.324231W 67.213234S
                      </span>
                    </td>
                    <th>
                      {bodega.sitioWeb.length ? (
                        <a
                          className="btn btn-ghost btn-xs"
                          href={`${bodega.sitioWeb}`}
                          target="blank"
                        >
                          sitio web
                        </a>
                      ) : (
                        ""
                      )}
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th>{countSeleccionados} seleccionadas</th>
                  <th></th>
                  <th></th>
                  <th>
                    Mostrando {bodegas.length} de {bodegas.length}
                  </th>
                </tr>
              </tfoot>
            </table>
            <div className="divider"></div>
            <div className="w-full flex mt-5">
              {countSeleccionados == 0 ? (
                <div
                  className="tooltip tooltip-left ml-auto z-50"
                  data-tip="selecciona al menos una bodega"
                >
                  <button className="btn btn-primary ml-auto" disabled={true}>
                    Importar Actualizacion
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary ml-auto">
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
