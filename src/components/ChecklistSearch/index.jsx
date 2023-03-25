// para filtrar los items de la checklist

import { useContext } from "react";
import { MdSearch } from "react-icons/md";
import { ChecklistContext } from "../../context";
import { IconContext } from "react-icons";
import "./checklistSearch.css"

const ChecklistSearch = () => {

    const { searchValue, setSearchValue } = useContext(ChecklistContext);

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <IconContext.Provider value={{ className: 'search-icon' }}>
            <div className='search-container'>
                <input placeholder="search" value={searchValue} onChange={onSearchValueChange} />
                <span><MdSearch /></span>
            </div>
        </IconContext.Provider>
    )
}

export default ChecklistSearch