// botón para agregar un nuevo item al checklist

import { useContext } from "react";
import { ChecklistContext } from "../../context";


const CreateItemButton = () => {

    const { setOpenModal } = useContext(ChecklistContext);

    const openModal = () => { setOpenModal(true) };

    return (
        <button onClick={openModal}>ADD</button>
    )
}

export default CreateItemButton