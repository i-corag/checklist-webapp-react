import { useContext, useState } from "react";
import { ChecklistContext } from "../../context";
import "./checklistItemForm.css";


const ChecklistForm = () => {

    const { addChecklistItem, setOpenModal } = useContext(ChecklistContext);

    const [newValue, setNewValue] = useState("");

    const onNewValueChange = (e) => {
        setNewValue(e.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        addChecklistItem(newValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add something to check...</label>
            <textarea placeholder="..." value={newValue} onChange={onNewValueChange} />
            <div>
                <button type='button' onClick={onCancel}>CANCEL</button>
                <button type='submit'>ADD</button>
            </div>
        </form>
    )
};

export default ChecklistForm