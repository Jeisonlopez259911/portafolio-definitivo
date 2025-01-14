import miFoto1 from "../assets/img/miFoto1.jpg";

function Card() {
    return (
        <div className="flex justify-center">
            <div
                className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={miFoto1}
                        alt="" />
                </div>
                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight">
                        Sobre mi
                    </h5>
                    <p className="mb-4 text-base">
                        Mi nombre es Jeison Stiven Lopez Castro soy un desarrollador/progrmador de software se utilizar Python, JavaScript, HTML, CSS, React, Django Git, GitHub y se trabajar en metodologia agil SCRUM, tambien soy Tecnico en sitemas y Tecnologo en telecumunicaciones.
                    </p>
                </div>
            </div>
        </div>




    )
}

export default Card