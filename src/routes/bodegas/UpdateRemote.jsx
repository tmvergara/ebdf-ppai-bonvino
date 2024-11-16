import useSWR from "swr";
import BodegasConActualizacion from "../../components/BodegasConActualizacion";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_BONVINO_API_URL;

function UpdateRemote() {
  // Server GET
  const mostrarBodegasConActualizacionDisponible = (...args) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isValidating } = useSWR(
    `${apiUrl}/bodegas/actualizar-vinos-bodega/bodegas-con-actualizacion`,
    mostrarBodegasConActualizacionDisponible
  );

  const notifyError = () => {
    console.log(error);
    toast.error("Se produjo un error al buscar los datos en el servidor...", {
      id: "server-fetch-error",
    });
  };

  if (error) {
    notifyError();
  }

  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Bonvino</a>
          </li>
          <li>
            <a>Gestion de Bodegas</a>
          </li>
          <li>
            <a>Modificar</a>
          </li>
          <li>Importar Actualizacion Vinos de Bodega</li>
        </ul>
      </div>
      <div className="mt-10">
        <div className="card w-full bg-base-100 shadow-xl mb-14">
          <div className="card-body">
            <h2 className="card-title">Importar Actualizacion de Vinos</h2>
            {isValidating || error ? (
              <div className="flex flex-col w-full mt-1">
                <div className="skeleton h-12 w-full"></div>
                <div className="divider"></div>
                <div className="skeleton h-64 w-full"></div>
                <div className="divider"></div>
                <div className="skeleton ml-auto h-12 w-48"></div>
              </div>
            ) : (
              <>
                <BodegasConActualizacion bodegas={data} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default UpdateRemote;
