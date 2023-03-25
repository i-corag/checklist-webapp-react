import "./app.css"
import { ChecklistProvider } from "../../context";
import CreateItem from "../CreateItem";
import ChecklistCover from "../ChecklistCover";
import Checklist from "../Checklist";


function App() {
  return (
    <ChecklistProvider>
      <section className='app_container'>
        <div className='app_cover'>
          <ChecklistCover />
        </div>
        <div className='app_checklist'>
          <Checklist />
          <CreateItem />
        </div>
      </section>
    </ChecklistProvider>
  )
}

export default App
