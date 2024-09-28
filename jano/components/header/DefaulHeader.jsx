import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const lineStyle = {
    width: '2px', 
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%', 
    left: '37.4%',
    transform: 'translate(-50%, -50%)', 
    height: '45px' 
};


  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${navbar ? "fixed" : ""
        }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0" style={{  textShadow: 'none', background: 'red' ,width: '17vh',
    position: 'relative'}}>
            <Link href="/" className="d-block">
              {/* <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              /> */}
              <div className="bg-red-900 flex justify-center items-center h-screen background-color-red">
                <div className="flex items-center">
                  <div className="font-mono text-[420%] text-white tracking-[10px] mr-11 font-extrabold relative">
                  <span className="font-['Hackdaddy']" >
                     CODE
                  </span>
                    <span className="text-2xl ml-[-35px] relative top-[-10px] font-['Hackbot_Free_Trial']" >&lt;/&gt;</span>
                  </div>
                  {/* <div className="border-l-4 border-white h-[130px] relative top-[36px] mx-5 z-10" /> */}
                  <div style={lineStyle}></div>
                  <div style={{ marginLeft:'43%',position:'relative' }} className="font-['Terminus_(TTF)_for_Windows'] text-[410.3%] text-white tracking-[9px] relative top-[67px] ml-31 font-bold">
                   Krafters
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/login"
              className="login-btn-three rounded-circle tran3s me-3"
            >
              <i className="bi bi-person" />
            </Link>
            <Link
              href="/contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Contact us
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaulHeader;
