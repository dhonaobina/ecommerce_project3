import { useState } from "react";
import {data} from "./data";
import logo from "./images/logo.svg";
import avatar from "./images/image-avatar.png";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt=""></img>

          <nav>
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
                <IoCartOutline />
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

function App() {
  const [products] = useState(data);
  const[value,setValue] = useState(1)
  
  const {mainImage} = products[value]
  
  return (
    <>
      <Header />

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article>
          <img src={mainImage} alt="" className="h-96"/>

          <ul className="flex items-center justify-start gap-3 flex-wrap">
            {products.map((item, index) => ( 
              <li key={item.id} onClick={() => setValue(index)}>
                <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h1>lorem epsum a diam maecenas</h1>
        </article>
      </section>
    </>
  );
}

export default App;
