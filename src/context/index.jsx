import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ChecklistContext = createContext();

const ChecklistProvider = (props) => {

    const {
        item: checklist,
        saveItem: saveChecklist,
        loading,
        error
    } = useLocalStorage('CHECKLIST_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [checkedItem, setCheckedItem] = useState(false);

    // CHECKLIST CHECKED COUNTER
    const checked = checklist.filter(item => item.completed).length;
    const total = checklist.length;

    // CHECKLIST SEARCH (FILTER)
    let searchedItems = [];
    if (searchValue.length >= 1) {
        searchedItems = checklist.filter(item => {
            const checklistItemText = item.text.toLowerCase();
            const searchedItemsText = searchValue.toLowerCase();
            return checklistItemText.includes(searchedItemsText);
        })
    } else {
        searchedItems = checklist;
    }

    //ADD CHECKLIST ITEM
    const addChecklistItem = (text) => {
        const newChecklist = [...checklist];
        newChecklist.push({
            text,
            completed: false
        });
        saveChecklist(newChecklist);
    };

    // DELETE CHECKLIST ITEM
    const deleteChecklistItem = (text) => {
        const itemIndex = checklist.findIndex(item => item.text === text);
        const newChecklist = [...checklist];
        newChecklist.splice(itemIndex, 1);
        saveChecklist(newChecklist);
    };

    const checkChecklistItem = (text) => {
        const itemIndex = checklist.findIndex(item => item.text === text);
        const newChecklist = [...checklist];
        checkedItem ? setCheckedItem(false) : setCheckedItem(true);
        newChecklist[itemIndex].completed = checkedItem;
        saveChecklist(newChecklist);
    };

    return (
        <ChecklistContext.Provider value={{
            loading,
            error,
            total,
            checked,
            searchValue,
            setSearchValue,
            searchedItems,
            addChecklistItem,
            deleteChecklistItem,
            checkChecklistItem,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ChecklistContext.Provider>
    )
};

export { ChecklistContext, ChecklistProvider };