// cada item del checklist

const ChecklistItem = (props) => {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

export default ChecklistItem