import { CiMenuBurger } from "react-icons/ci";
import { useEffect } from "react";
import {
    Collapse,
    Ripple,
    Dropdown,
    initTWE,
} from "tw-elements";
import { NavLink } from "react-router-dom";

function Publicaciones() {
    useEffect(() => {
        initTWE({ Collapse, Ripple, Dropdown });
    }, [])

    return (
        <div className="bg-[#5FB2D1]">
            <nav
                className="relative flex w-full items-center justify-between bg-[#893ABF] py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref>
                <div className="flex flex-nowrap">
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
                                        to="/contacto"
                                        data-twe-nav-link-ref
                                        data-twe-ripple-init
                                        data-twe-ripple-color="light"
                                    >Features</NavLink>
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

                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <div className="relative flex items-center">

                            <a
                                className="ps-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                href="#">
                                <span className="[&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </span>
                            </a>

                            <a
                                className="ps-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                href="#">
                                <span className="[&>svg]:w-5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </span>
                            </a>
                            <div className="relative" data-twe-dropdown-ref>
                                <a
                                    className="flex items-center px-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
                                    href="#"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-twe-dropdown-toggle-ref
                                    aria-expanded="false">
                                    <span className="[&>svg]:h-5 [&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke-width="1.5">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </span>
                                    <span className="[&>svg]:w-5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                                <ul
                                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-[#893ABF] bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                                    aria-labelledby="dropdownMenuButton1"
                                    data-twe-dropdown-menu-ref>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-[#893ABF]  px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                            href="#"
                                            data-twe-dropdown-item-ref
                                        >Action</a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-[#893ABF]  px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                            href="#"
                                            data-twe-dropdown-item-ref
                                        >Another action</a>
                                    </li>
                                    <li>
                                        <a
                                            className="block w-full whitespace-nowrap bg-[#893ABF] px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                            href="#"
                                            data-twe-dropdown-item-ref
                                        >Something else here</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <h1 className="mt-4">
                Publicaciones
            </h1>
            <div className="relative mb-4  mt-4 flex flex-wrap items-stretch">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon1"
                >@</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
            </div>

            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                <span
                    className="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon2"
                >@example.com</span>
            </div>

            <label
                for="basic-url"
                className="mb-2 inline-block text-surface dark:text-white"
            >Your vanity URL</label>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon3"
                >https://example.com/users/</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    id="basic-url"
                    aria-describedby="basic-addon3" />
            </div>

            <div className="relative mb-4 flex justify-end w-full flex-wrap items-stretch ">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >$</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    aria-label="Amount (to the nearest dollar)" />
                <span
                    className="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >.00</span>
            </div>

            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Username"
                    aria-label="Username" />
                <span
                    className="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >@</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Server"
                    aria-label="Server" />
            </div>

            <div className="relative flex w-full flex-wrap items-stretch">
                <span
                    className="flex items-center whitespace-nowrap border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >With textarea</span>
                <textarea
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    aria-label="With textarea"></textarea>
            </div>
            <div className="mb-3">
                <label
                    for="formFileMultiple"
                    className="mb-2 inline-block text-neutral-500 dark:text-neutral-400"
                >Multiple files input example</label>
                <input
                    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                    type="file"
                    id="formFileMultiple"
                    multiple />
            </div>
                        <div className="relative mb-4  mt-4 flex flex-wrap items-stretch">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon1"
                >@</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
            </div>

            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" />
                <span
                    className="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon2"
                >@example.com</span>
            </div>

            <label
                for="basic-url"
                className="mb-2 inline-block text-surface dark:text-white"
            >Your vanity URL</label>
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                    id="basic-addon3"
                >https://example.com/users/</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    id="basic-url"
                    aria-describedby="basic-addon3" />
            </div>

            <div className="relative mb-4 flex justify-end w-full flex-wrap items-stretch ">
                <span
                    className="flex items-center whitespace-nowrap rounded-s border border-e-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >$</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    aria-label="Amount (to the nearest dollar)" />
                <span
                    className="flex items-center whitespace-nowrap rounded-e border border-s-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >.00</span>
            </div>

            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Username"
                    aria-label="Username" />
                <span
                    className="flex items-center whitespace-nowrap border border-x-0 border-solid border-neutral-200 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                >@</span>
                <input
                    type="text"
                    className="relative m-0 block flex-auto rounded-e border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Server"
                    aria-label="Server" />
            </div>
            <nav aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >Previous</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >1</a>
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >2</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >3</a>
                    </li>
                    <li>
                        <a
                            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            href="#"
                        >Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Publicaciones