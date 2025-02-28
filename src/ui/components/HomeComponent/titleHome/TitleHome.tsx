import './TitleHome.css'


export const TitleHome = ({className}:{className:string}) => {

    return(
        <>
            <section className={`titleHome  ${className}`}>
                <h4> Dashboard </h4>
                <div>
                    <img src="/images/logo.png" alt="Logo_Principal png"/>
                </div>
            </section>
        </>
    )

}