import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);

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
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              {/* <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              /> */}
              <div className="bg-red-800 flex justify-center items-center h-screen">
                <div className="flex items-center">
                  <div className="font-mono text-[420%] text-white tracking-[10px] mr-11 font-extrabold relative">
                  <span 
  className="font-['Hackdaddy']" 
  style={{ color: 'red', textShadow: 'none' }}
>
  CODE
</span>
                    <span className="text-2xl ml-[-35px] relative top-[-10px] font-['Hackbot_Free_Trial']" style={{ color: 'red', textShadow: 'none' }}>&lt;/&gt;</span>
                  </div>
                  {/* <div className="border-l-4 border-white h-[130px] relative top-[36px] mx-5 z-10" /> */}
                  <div className=" text-[410.3%] text-red tracking-[9px] relative top-[67px] ml-[-4.1%] font-light">
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
