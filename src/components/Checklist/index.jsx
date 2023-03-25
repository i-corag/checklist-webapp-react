// tendremos todos los items del checklist
import { useContext } from "react";
import { ChecklistContext } from "../../context";
import ChecklistCounter from "../ChecklistCounter";
import ChecklistSearch from "../ChecklistSearch";
import ChecklistEmpty from "../ChecklistEmpty";
import ChecklistError from "../ChecklistError";
import ChecklistItem from "../ChecklistItem";
import ChecklistLoading from "../ChecklistLoading";
import './checklist.css'

const Checklist = () => {

    const { loading, error, total, searchedItems, checkChecklistItem, deleteChecklistItem } = useContext(ChecklistContext);

    return (
        <>
            <h1>MY CHECKLIST</h1>
            {loading && <ChecklistLoading />} {/*es un estado en el que esta cargando*/}
            {(!loading && !error && !searchedItems.length) && <ChecklistEmpty />} {/*es otro estado en el que ya cargo*/}
            {error && <ChecklistError />} {/*es un estado en el que ha habido un error*/}
            {(!loading && (total >= 1)) &&
                <ul className='checklist-container'>
                    <span><ChecklistCounter /></span>
                    <span><ChecklistSearch className='checklist-search' /></span>
                    <div className='checklist-items'>
                        {searchedItems.map(item => (
                            <ChecklistItem
                                key={item.text}
                                text={item.text}
                                completed={item.completed}
                                onChecked={() => checkChecklistItem(item.text)}
                                onDelete={() => deleteChecklistItem(item.text)} />
                        ))}
                    </div>
                </ul>

            }
        </>
    );

}



export default Checklist