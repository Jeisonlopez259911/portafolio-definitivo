import DjangoCrudImg from "../assets/img/Django-crud-img.png";
import Calculadora from "../assets/img/Calculadora.png";

function Cards() {
    return(
        <div className="grid-cols-1 sm:grid md:grid-cols-3">
            <div
                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                    <img
                        className="rounded-t-lg"
                        src={DjangoCrudImg}
                        alt="Djago Crud Img" />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Django CRUD</h5>
                    <p className="mb-4 text-base">
                        Este es un CRUD hecho con Django y desplegado en render
                    </p>
                    <a className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" href="https://django-auth-crud-l3po.onrender.com" target="_blank">Ir a la pagina</a>
                </div>
            </div>

            <div
                className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
                <a href="#!">
                    <img
                        className="rounded-t-lg"
                        src={Calculadora}
                        alt="Calculadora Img" />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Calculadora</h5>
                    <p className="mb-4 text-base">
                        Este es una calculadora hecha con HTML, CSS, JavaScript y desplegado en render
                    </p>
                    <a className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" href="https://calculadora-ia2w.onrender.com/" target="_blank">Ir a la pagina</a>
                </div>
            </div>
        </div>
    )
}

export default Cards