import { Link, Outlet, useNavigate } from 'react-router-dom';
import { 
  HiViewGridAdd, 
  HiOutlineTemplate, 
  HiOutlineCog, 
  HiOutlineMenu, 
  HiOutlineSearch, 
  HiOutlineLogout, 
  HiOutlinePencil, 
  HiOutlinePlus 
} from "react-icons/hi";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <section className="flex flex-col sm:flex-row bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 min-h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full sm:w-20 hidden sm:flex sm:flex-col shadow-lg">
        <a
          href="/"
          className="inline-flex items-center justify-center h-20 w-20 bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all duration-300"
        >
          <img src="/fav-icon.png" alt="Logo" className="w-10 h-10" />
        </a>
        <div className="flex-grow flex flex-col justify-between text-gray-300 bg-gray-900">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="sr-only">Dashboard</span>
              <HiOutlineTemplate className="h-6 w-6" />
            </Link>
            <Link
              to="/dashboard/add-new-book"
              className="inline-flex items-center justify-center py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="sr-only">Add Book</span>
              <HiViewGridAdd className="h-6 w-6" />
            </Link>
          </nav>
          <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-800 hover:bg-gray-800 transition-all duration-300">
            <button className="p-3 rounded-full hover:bg-gray-700 hover:text-purple-400 transition-all duration-300">
              <span className="sr-only">Settings</span>
              <HiOutlineCog className="h-6 w-6" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow text-gray-800">
        {/* Top Bar */}
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow-md">
          <button className="block sm:hidden p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300">
            <span className="sr-only">Menu</span>
            <HiOutlineMenu className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-md sm:-ml-2">
            <HiOutlineSearch className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400" />
            <input
              type="text"
              role="search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border border-gray-300 focus:border-purple-400 focus:ring focus:ring-purple-100 rounded-lg transition-all duration-300"
            />
          </div>
          <div className="flex items-center ml-auto">
            <div className="border-l pl-3 ml-3 space-x-1">
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-300"
              >
                <span className="sr-only">Log out</span>
                <HiOutlineLogout className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <h2 className="text-gray-500">Book Store Inventory</h2>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-end gap-4">
              <Link
                to="/dashboard/manage-books"
                className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 bg-white border border-purple-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <HiOutlinePencil className="flex-shrink-0 h-5 w-5 mr-2" />
                Manage Books
              </Link>
              <Link
                to="/dashboard/add-new-book"
                className="inline-flex px-5 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <HiOutlinePlus className="flex-shrink-0 h-6 w-6 mr-2" />
                Add New Book
              </Link>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
