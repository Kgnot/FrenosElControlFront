import './ButtonView.css'


interface Props{
    name:string
    className:string
}

export const ButtonView = ({name,className}:Props) =>
{

    return (
        <button className={`button_view ${className}`}>
            {name}
        </button>
    )
}