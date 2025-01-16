import { CiMenuBurger } from "react-icons/ci";
import { PiReadCvLogoLight } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { useEffect } from "react";
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";
import { NavLink } from "react-router-dom";
import HojaDeVida from "../assets/documents/HojaDeVida.pdf";
import imagenNavMenu from "../assets/img/imagenNavMenu.gif";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";



function Header() {
   useEffect(() => {
    initTWE({ Collapse, Ripple });
   }, [])
    return(
      <header>
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
          data-twe-navbar-ref>
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">

              <button
                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-twe-collapse-init
                data-twe-target="#navbarSupportedContentX"
                aria-controls="navbarSupportedContentX"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span
                  className="[&>CiMenuBurger]:h-7 [&>CiMenuBurger]:w-7 [&>CiMenuBurger]:stroke-black/50 dark:[&>CiMenuBurger]:stroke-neutral-200">
                  <CiMenuBurger />
                </span>
              </button>
            </div>

            <div
              className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
              id="navbarSupportedContentX"
              data-twe-collapse-item>
              <ul
                className="me-auto flex flex-col lg:flex-row"
                data-twe-navbar-nav-ref>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="whitespace-pre block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  ><IoHome />Home</NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to={HojaDeVida}
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    target="_blank"
                  ><PiReadCvLogoLight />Hoja de vida</NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="https://github.com/Jeisonlopez259911"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    target="_blank"
                  > <BsGithub/>GitHub</NavLink>
                </li>
                <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="https://www.linkedin.com/in/jeison-stiven-lopez-castro-03a535256/"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    target="_blank"
                  ><LiaLinkedin/>Linkedin</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <img className="h-full w-full overflow-hidden bg-cover bg-[100%]" src={imagenNavMenu} alt="" srcset="" />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header