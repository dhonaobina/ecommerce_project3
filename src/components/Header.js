import logo from "../images/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../images/image-avatar.png";

export default function Header() {
    return (
      <>
        <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
          <div className="flex items-center justify-start gap-4">
            <img src={logo} alt=""></img>
  
            <nav className="hidden">
              <ul className="flex items-center justify-start gap-4">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
  
          <div>
            <ul className="flex items-center justify-start gap-4">
              <li>
                <button>
                  <IoCartOutline className="text-2xl text-slate-600" />
                </button>
              </li>
              <li>
                <img src={avatar} alt="" className="w-12" />
              </li>
            </ul>
          </div>
        </header>
      </>
    );
  }
  