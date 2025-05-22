import React, { useState, useCallback } from "react";
import logo from '../../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);


  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData ) {
      setUserRole(userData.role);
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);


  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    window.location.reload();
  }, []);

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              width={30}
              height={30}
              className="mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Restaurant App
            </span>
          </a>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${menuOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>

              <svg
                className={`w-6 h-6 ${menuOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293L10 10.586 15.707 4.293a1 1 0 011.414 1.414L11.414 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-14 left-0 w-full bg-white shadow-md z-50 text-center`}
          >
            <ul className="flex flex-col mt-4 font-medium p-4">
              
              <li>
                <a
                  href="/menu"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                >
                  Menu 
                </a>
              </li>

              {userRole === 'WAITER' ? (
                <>
                <li>
                  <a
                    href="/11d772dff79c4d7cbaff6e3fa491a478"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Waiter Page
                  </a>
                </li>
                <li>
                  <p
                    onClick={handleLogout}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:cursor-pointer"
                  >
                    Logout
                  </p>
                </li>
                </>
              ) : userRole==='KITCHEN' ? (
                <>
                <li>
                  <a
                    href="/b86f6df847644f00aa82f285c2173e70"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Kitchen Page
                  </a>
                </li>
                <p
                    onClick={handleLogout}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:cursor-pointer"
                  >
                    Logout
                  </p>
                  </>
              ) : userRole==='MANAGER' ? (
                <>
                
                <p
                    onClick={handleLogout}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 hover:cursor-pointer"
                  >
                    Logout
                  </p>
                  </>
              ) : (
                
                <li>
                  <a
                    href="/login"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                  >
                    Login 
                  </a>
                </li>
                

              )}

            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}
