import miFoto2 from "../assets/img/miFoto2.jpg"
function Avatar(){
    return(
        <div className="text-center">
            <img
                src={miFoto2}
                className="mx-auto mb-4 w-32 rounded-lg"
                alt="Avatar" />
            <h5 className="mb-2 text-xl font-medium leading-tight">Jeison Stiven Lopez Castro</h5>
            <p className="text-neutral-500 dark:text-neutral-400">Web designer</p>
        </div>
    )
}

export default Avatar;