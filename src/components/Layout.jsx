import { Link, Outlet, useLocation } from "react-router-dom"

const Layout = () => {
  const location = useLocation()


  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/6 bg-gray-900 px-5 py-10">
            <h2 className="text-4xl font-black text-center text-white">CRM - Clients</h2>
            <nav className="m-10">
              <Link className={`${location.pathname === "/" ? "text-gray-400":"text-white"} text-2xl block mt-2 hover:text-gray-400`} to="/">Clients</Link>
              <Link className={`${location.pathname === "/clients/new" ? "text-gray-400":"text-white"} text-2xl block mt-2 hover:text-gray-400`} to="/clients/new">New client</Link>
            </nav>
        </aside>
        <main className="md:w-5/6 p-10 md:h-screen overflow-scroll bg-gray-600">
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout