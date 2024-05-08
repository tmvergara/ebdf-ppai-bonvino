import { NavLink, Outlet } from "react-router-dom";
import Logo from "/public/logo.svg";
export default function Layout() {
  const testMenuItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "add",
      title: "About",
    },
  ];

  <li>
    <NavLink to="/">Home</NavLink>
  </li>;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Drawer content here */}
            <div className="navbar bg-base-200">
              <div className="inline-flex">
                <button className="btn btn-square btn-ghost lg:hidden drawer-toggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex-1"></div>
              <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
                <div className="dropdown dropdown-end ml-2 mr-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://avatars.githubusercontent.com/u/164236762?v=4"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <main className="flex-1 pl-10 pr-10 pt-5 bg-base-100">
              <Outlet />
            </main>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close side dbar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
              {/* Sidebar content here */}
              <div className="inline-flex mb-6">
                <img src={Logo} alt="" className="w-10" />
                <h1 className="text-xl font-bold select-none mt-auto mb-auto ml-3">
                  bonvino
                </h1>
              </div>
              {/* <ul>
                {testMenuItems.map(({ href, title }) => (
                  <li className="m-2" key={title}>
                    <NavLink to={href}>
                      <p>{title}</p>
                    </NavLink>
                  </li>
                ))}
              </ul> */}
              <ul className="menu bg-base-300 rounded-box">
                <li>
                  <NavLink to={"/"}>
                    <p>Home</p>
                  </NavLink>
                </li>
                <li>
                  <details>
                    <summary>Gestion de Vinos</summary>
                    <ul>
                      <li>
                        <a>Vinos</a>
                      </li>

                      <li>
                        <details open>
                          <summary>Modificar</summary>
                          <ul>
                            <li>
                              <a>Crear</a>
                            </li>
                            <li>
                              <a>Eliminar Masivo</a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details open>
                    <summary>Gestion de Bodegas</summary>
                    <ul>
                      <li>
                        <a>Bodegas</a>
                      </li>

                      <li>
                        <details open>
                          <summary>Modificar</summary>
                          <ul>
                            <li>
                              <a>Crear</a>
                            </li>
                            <li>
                              <NavLink to={"bodegas/actualizar-remoto"}>
                                <p>Importar Actualizacion</p>
                              </NavLink>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
              <div
                id="dropdown-cta"
                class="p-4 mt-auto rounded-sm dark:bg-base-200"
                role="alert"
              >
                <div class="flex items-center mb-3">
                  <span class="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-200 dark:text-orange-900">
                    Beta
                  </span>
                </div>
                <p class="mb-3 text-sm text-gray-800 dark:text-gray-800">
                  Preview the new Flowbite dashboard navigation! You can turn
                  the new navigation off for a limited time in your profile.
                </p>
                <a
                  class="text-sm text-gray-800 underline font-medium hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Turn new navigation off
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
