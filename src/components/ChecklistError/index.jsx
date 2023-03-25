import './checklistError.css';

const ChecklistError = ({ error }) => {
    return (
        <div className='error_container'>
            <h3>ups something went wrong</h3>
            <img src="https://www.pushengage.com/wp-content/uploads/2022/09/404-Page-Design-Examples.png" alt="img" />
            <p>{error}</p>
        </div>
    )
}

export default ChecklistError