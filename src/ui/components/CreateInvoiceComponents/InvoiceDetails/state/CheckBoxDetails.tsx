import './CheckBoxDetails.css'

interface CheckBoxDetailsProps {
    title: string;
    check1: string;
    check2: string;
    groupName: string;  // nuevo prop para agrupar radios
}

export const CheckBoxDetails = ({ title, check1, check2, groupName }: CheckBoxDetailsProps) => {
    return (
        <div className="checkBoxDetails">
            <b>{title}</b>
            <label>
                <input type="radio" name={groupName} value={check1} />
                {check1}
            </label>
            <label>
                <input type="radio" name={groupName} value={check2} />
                {check2}
            </label>
        </div>
    );
};
