import React, { useState, useEffect, useRef } from "react";
import './index.css';

function Header1() {
  const [bool, setBool] = useState([0, 0, 0, 0]);
  const menuRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Ссылки на элементы меню

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

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="App" id="mayak">
      <div className="header1">
        <div className="h1-1">
          <div>
            <img src='https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png' />&nbsp;(08)123 456 7890
          </div>
          <div>
            <img src="https://www.pngmart.com/files/7/E-Mail-Transparent-Background.png" />&nbsp;Yourmail@domain.com
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/81/81609.png" />&nbsp; &nbsp;
            <img
              src="https://cdn.icon-icons.com/icons2/509/PNG/512/Facebook_icon-icons.com_49947.png" /> &nbsp; &nbsp;<img
              src="https://cdn-icons-png.flaticon.com/512/142/142372.png" /> &nbsp; &nbsp;<img
              src="https://cdn-icons-png.flaticon.com/512/1216/1216904.png" /> &nbsp; &nbsp;<img
              src="https://seeklogo.com/images/Y/youtube-black-logo-B90F9C414C-seeklogo.com.png" />&nbsp; &nbsp;
            <img src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" /></div>
        </div>

        <div className="h1-2" style={{ cursor: "pointer" }}>

          <div className="main1" id="wow">
            <div
              className="dollar"
              onClick={() => open(0)}
              ref={menuRefs[0]}

            >
              USD $&nbsp;&nbsp;
              <img
                src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png"
                alt="Toggle"
              />
            </div>
            <div className={bool[0] ? "menu " : "closed"} id="menu3"><div> Euro €</div><div>Usd $</div></div>
          </div>

          <div className="main1">
            <div
              className="dollar"
              onClick={() => open(1)}
              ref={menuRefs[1]}

            >
              USD $&nbsp;&nbsp;
              <img
                src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png"
                alt="Toggle"
              />
            </div>
            <div className={bool[1] ? "menu" : "closed"} id="menu3"><div > Euro €</div><div>Usd $</div></div>
          </div>
          <div className="main1">
            <div
              className="language"
              onClick={() => open(2)}
              ref={menuRefs[2]}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png"
                alt="English"
              /> &nbsp;
              English&nbsp;&nbsp;
              <img
                src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png"
                alt="Toggle"
              />
              <div className={bool[2] === 1 ? "menu" : "closed"} id="menu1">
                <div><a href="#"><img src="assets/images/icon/la-2.jpg" alt="" /> English</a></div>
                <div><a href="#"><img src="assets/images/icon/la-2.jpg" alt="" /> Français</a></div>
              </div>
            </div>
          </div>
          <div className="main1">
            <div
              className="Setting"
              onClick={() => open(3)}
              ref={menuRefs[3]}
            >
              <img
                src="https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png"
                alt="Setting"
              />
              settings&nbsp;&nbsp;
              <img
                src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png"
                alt="Toggle"
              />
              <div className={bool[3] === 1 ? "menu12" : "closed"} id="menu2">
                <div>My account</div>
                <div>Checkout</div>
                <div>Sign in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="App-header">
        {/* ... Остальной JSX код ... */}
      </header>
    </div>
  );
}

export default Header1;
