import {Routes, Route} from "react-router-dom";
import HomeCreateTodo from "./pages/HomeCreateTodo";
import ShowTodo from "./pages/ShowTodo";
import UpdateTodo from "./pages/UpdateTodo";
import DeleteTodo from "./pages/DeleteTodo";

const App = () => {
  return(
    <Routes>
      <Route path = '/create' element={<HomeCreateTodo/>}/>
      <Route path ='/todo/:id/details' element={<ShowTodo/>}/>
      <Route path = '/todo/:id/update' element={<UpdateTodo/>}/>
      <Route path = '/todo/:id/delete' element={<DeleteTodo/>}/>
    </Routes>
  )
}

export default App;