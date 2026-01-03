import { FaQuestionCircle } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Link, Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <div className="bg-success text-white h-[60px] flex items-center justify-between  px-10">
        <h1 className="font-bold text-lg">XZOM POS</h1>
        <button className="btn btn-sm rounded-lg">ADMIN</button>
      </div>
      <div className="flex h-screen">
        <div className="bg-gray-600 w-[260px] shadow-sm p-4">
          <ul>
            <li>
              <Link to="/" className="flex items-center gap-2 p-2 hover:bg-success rounded-lg ">
                  <TiHome className="text-lg"/>
                  <span>ទំព័រដើម</span>
              </Link>
            </li>
            <li>
              <Link to="/category" className="flex items-center gap-2 p-2 hover:bg-success rounded-lg ">
                  <TiHome className="text-lg"/>
                  <span>ប្រភេទទិន្នន័យ</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 p-2 hover:bg-success rounded-lg ">
                  <FaQuestionCircle className="text-lg" />
                  <span>អំពីយើង</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-400 grow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
