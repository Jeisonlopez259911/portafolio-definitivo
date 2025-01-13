import { CiMenuBurger } from "react-icons/ci";
import { useEffect } from "react";
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";
import { NavLink } from "react-router-dom";
import HojaDeVida from "../assets/documents/HojaDeVida.pdf";



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
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="/"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >Home</NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to={HojaDeVida}
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    target="_blank"
                  >Hoja de vida</NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >Pricing</NavLink>
                </li>
                <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                  <NavLink
                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    to="#!"
                    data-twe-nav-link-ref
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="relative h-[350px] overflow-hidden bg-[url('D:\Proyectos-Programacion\new-portafolio\portafolio-definitivo\src\assets\img\imagenNavMenu.gif')] bg-cover bg-[50%] bg-no-repeat">
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">Heading</h1>
                <h3 className="mb-8 text-3xl font-bold">Subeading</h3>
                <button
                  type="button"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light">
                  Call to action
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header