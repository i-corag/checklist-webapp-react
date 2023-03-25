// cada item del checklist
import { MdOutlineCheckCircle, MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import './checklistItem.css';
import { IconContext } from "react-icons";


const ChecklistItem = (props) => {

    let iconStyles = {
        borderRadius: 100,
        background: 'linear-gradient(354deg, rgba(82,126,235,1) 54%, rgba(250,118,113,1) 100%)',
        color: 'var(--lightGrey-color)'
    }

    return (
        <IconContext.Provider value={{ className: 'react-icons' }}>
            <li className="item_container">
                <span onClick={props.onChecked}>
                    {props.completed ? <MdOutlineCheckCircle style={iconStyles} /> : <MdOutlineRadioButtonUnchecked />}
                </span>
                <p className={`item-p ${props.completed && 'item-p--complete'}`}>{props.text}</p>
                <span onClick={props.onDelete}><AiOutlineDelete /></span>
            </li>
        </IconContext.Provider >
    )
}

export default ChecklistItem

