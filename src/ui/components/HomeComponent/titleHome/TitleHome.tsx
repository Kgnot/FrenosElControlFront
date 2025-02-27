import './TitleHome.css'


export const TitleHome = ({className}:{className:string}) => {

    return(
        <>
            <section className={`titleHome  ${className}`}>
                <h2> Dashboard </h2>
                <div>
                    <img src="/images/logo.png" alt="Logo_Principal png"/>
                </div>
            </section>
        </>
    )

}