import { useContext } from "react";
import { ChecklistContext } from "../../context";
import ChecklistForm from "../ChecklistForm";
import Modal from "../Modal";


const CreateItem = () => {

    const { openModal } = useContext(ChecklistContext);

    return (
        openModal && (
            <Modal>
                <ChecklistForm />
            </Modal>
        )
    )
};

export default CreateItem




