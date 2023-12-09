import { useState } from "react";
import {data} from "./data";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400">
      <div>
        <img src={logo} alt=""></img>

        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <ul>
          <li><button><IoCartOutline /></button></li>
          <li><img src={avatar} alt=""></img></li>
        </ul>
      </div>
      </header>
    </>
  )
}

function App() {
  const [products] = useState(data)

  return (
    <>
      <Header />
    </>
  );
}

export default App;
