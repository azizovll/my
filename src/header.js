import React, { useState, useEffect, useRef } from "react";
import { GoSearch } from "react-icons/go"
import { BsCartFill } from 'react-icons/bs'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { CgMenu } from 'react-icons/cg'
import './index.css';
import { GrClose } from 'react-icons/gr'
import {BsChevronDoubleUp} from 'react-icons/bs'

function Header() {
  const [bool, setBool] = useState([0, 0, 0]);
  const [bool1, setBool1] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Состояние для определения, прокручена ли страница

  const menuRefs = [useRef(null), useRef(null), useRef(null)]; // Ссылки на элементы меню

  const open = (index) => {
    setBool((prev) => {
      const updatedState = prev.map((value, i) => (i === index ? 1 : 0));
      return updatedState;
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      for (let i = 0; i < menuRefs.length; i++) {
        if (menuRefs[i].current && !menuRefs[i].current.contains(event.target)) {
          setBool((prev) => prev.map((value, index) => (index === i ? 0 : value)));
        }
      }
    };

    const handleScroll = () => {
      // Определение, прокручена ли страница
      if (window.scrollY > 32) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (<>
    <a className={isScrolled ? "scrolled1" : "clossed"} href='#mayak'><BsChevronDoubleUp/></a>
    
    <div className={`App ${isScrolled ? "scrolled" : ""}`}>
      <div className={`header2 ${isScrolled ? "scrolled" : ""}`}>
        <div className="h2-1">
          <img src="https://htmldemo.net/boyka/boyka/assets/images/logo/logo.png" />
          <ul className={`laptop `} id="ul" style={{ cursor: "pointer" }}>
            <li>Home</li>
            <li>Shop</li>
            <li>Page</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="h2-2" style={{ cursor: "pointer" }}>
          <div className="main2">
            <div className="dollar" onClick={() => open(0)}></div>
            <div className={bool[0] ? "menu" : "closed"} id="menu3">
              <div> Euro € </div>
              <div>Usd $</div>
            </div>
          </div>
          <div className="main2">
            <div className="language" onClick={() => open(1)} ref={menuRefs[1]}>
              <div className="hovergrey">
                <GoSearch />
                <b className="laptop xxs">Search</b>&nbsp;&nbsp;
              </div>
              <div className={bool[1] === 1 ? "menu1" : "closed1"} id="menu1">
                <div>
                  <input id="inp2" type="text" placeholder="Search our catalog" />
                  <GoSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="main2">
            <div className="setting" onClick={() => open(2)} ref={menuRefs[2]}>
              <div className="hovergrey">
                <BsCartFill />
                My cart
              </div>
              <div className={bool[2] === 1 ? "menu123 " : "closed3"} id="menu">
                <div className="margin">
                  <div className="df">
                    <div className="img">
                      <div className="x1">1x</div>
                      <img src="https://htmldemo.net/boyka/boyka/assets/images/cart/1.jpg" />
                    </div>
                    <div className="block">
                      <div className="txt1 hovergrey">Printed Summer Dress</div>
                      <div className="txt2 ">$55.61</div>
                      <div className="txt3"> Size: S</div>
                    </div>
                    <div className="hovergrey"><RiDeleteBin6Fill /></div>
                  </div>
                  <div className="line"></div>
                  <div className="df">
                    <div className="img">
                      <div className="x1">1x</div>
                      <img src="https://htmldemo.net/boyka/boyka/assets/images/cart/3.jpg" />
                    </div>
                    <div className="block">
                      <div className="txt1 hovergrey">Faded Sleeves T-shirt</div>
                      <div className="txt2 ">$72.21</div>
                      <div className="txt3">Size: M</div>
                    </div>
                    <div className="hovergrey"><RiDeleteBin6Fill /></div>
                  </div>
                  <div className="line"></div>
                  <div className="txt4">
                    <div>Sub-Total :</div>
                    <div className="greentxt">$127.42</div>
                  </div>
                  <div className="txt4">
                    <div>Total :</div>
                    <div className="greentxt">$127.42</div>
                  </div>
                  <div className="line"></div>
                  <div className="grbutton"><button>Checkout</button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile" onClick={() => bool1 ? setBool1(false) : setBool1(true)}>{bool1 ? <GrClose /> : <CgMenu />}</div>
        </div>
      </div><div className={isScrolled ? "scrolled2" : ""}>
      <div className={bool1 ? "moburger mobile": "mobclosed mobile"} id={isScrolled ? "scrolled2" : ""} >
        <ul>
          <li>HOME</li>
          <li>SHOP</li>
          <li>PAGE</li>
          <li>BLOG</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div></div>
    </div>
    <div className="nonen"></div></>
  );
}

export default Header;
