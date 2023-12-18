import { useState } from "react";
import {data} from "./data";
import logo from "./images/logo.svg";
import { IoCartOutline } from "react-icons/io5";
import avatar from "./images/image-avatar.png";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";



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
  const[value, setValue] = useState(1);
  const [amount, setAmount] = useState(0)
  
  const {mainImage} = products[value]
  
  return (
    <>
      <Header />

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <article>
          <img src={mainImage} alt="" className="w-full rounded-2xl"/>

          <ul className="flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => ( 
              <li 
                key={item.id} 
                onClick={() => setValue(index)} 
                className={
                  `${index === value && "border-2 border-orange-400 opacity-80"} border-2 rounded-2xl overflow-hidden cursor-pointer`
                  }  
                >
                  <img src={item.thumbnail} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-small font-bold inline-block rounded shadow mb-10">Sneakers Company</h2>
          <h1 className="text-slate-90 mb-10 font-bold text-3xl lg:text-4xl">Fall Limited Edition Sneakers</h1>
          <p className="text-slate-600 mb-10 leading-relaxed">These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

          <div>
            <ul>
              <li>$125</li>
              <li>50%</li>
            </ul>

            <p><s>$250</s></p>
          </div>

          <div>
            <ul>
              <li>
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li>
                <img src={plus} alt="" />
              </li>
            </ul>

            <button>
                <IoCartOutline /> Add to cart
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
