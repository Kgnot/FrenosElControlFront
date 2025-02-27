import './ButtonView.css'


interface Props{
    name:string
}

export const ButtonView = ({name}:Props) =>
{

    return (
        <button className={"button_view"}>
            {name}
        </button>
    )
}