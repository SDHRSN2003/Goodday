import { useState } from "react";
import Spinner from "../components/animates/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeCreateTodo = () => {
  const [Day,setDay] = useState('');
  const [Work,setWork] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleTodo = () =>{
  const data = {
    Day,
    Work,
  };
  setLoading(true);
  axios
  .post('http://localhost:2500/todo/create',data)
  .then(()=>{
    setLoading(false);
    navigate('/create');
  }).catch((error)=>{
    setLoading(false);
    console.log(error);
  });
  }
  return (
    <div className="p-4">
      <h1 className="text-5xl text-center my-4">TODO LIST</h1>
      <div className="flex flex-col border-3 border-red-600 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-black-500">Day</label>
          <input
          type="text"
          value={Day}
          onChange={(e)=>setDay(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-black-500">Work</label>
          <input
          type="text"
          value={Work}
          onChange={(e)=>setWork(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"/>
        </div>
        
        <button className="p-2 bg-blue-500 m-8" onClick={handleTodo}>
          Create
        </button>
        {
          loading ? <Spinner/> : ''
        }
      </div>
    </div>
  )
}

export default HomeCreateTodo;