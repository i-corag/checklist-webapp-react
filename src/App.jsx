import ChecklistCounter from "./components/ChecklistCounter";
import ChecklistSearch from "./components/ChecklistSearch";
import Checklist from "./components/Checklist";
import ChecklistItem from "./components/ChecklistItem";
import CreateChecklistItemButton from "./components/CreateChecklistItemButton";

const checklistItems = [
  { text: 'Buy flight ticket', completed: false },
  { text: 'Pack the suitcase', completed: false },
  { text: 'Arrange taxi to airport', completed: false }
];


function App() {

  return (
    <>
      {/* Asi puedo agregar un comentario de javascript*/}
      <ChecklistCounter />
      <ChecklistSearch />
      <Checklist>
        {checklistItems.map(checklistItem => (
          <ChecklistItem key={checklistItem.text} text={checklistItem.text} />
        ))}
      </Checklist>
      <CreateChecklistItemButton />
    </>
  )
}

export default App
