// para llevar un conteo de las tareas totales y las completadas

import { useContext } from "react";
import { ChecklistContext } from "../../context"

const ChecklistCounter = () => {
    const { total, checked } = useContext(ChecklistContext);
    return (
        <h3>{checked} of {total} are checked !</h3>
    );
}

export default ChecklistCounter;