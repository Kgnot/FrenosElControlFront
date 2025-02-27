import './UpPerfil.css'

export const UpPerfil = ({className}:{className:string}) => {

    return(
        <section className={`upPerfil ${className}`}>
            <img src="./images/profile.webp" alt="Foto de perfil"/>
            <div className={"upPerfil-info"}>
                <span> Bienvenida/o de nuevo </span>
                <p><b> Omaira Amayaxd </b></p>
            </div>
        </section>
    )
}