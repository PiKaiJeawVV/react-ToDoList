import "./App.css";
import { useState } from "react";

function App() {
  const [newJob, setnewJob] = useState("");
  const [job, setJob] = useState([]);
  function saveJob(e) {
    e.preventDefault();
    if (!newJob) {
      alert("โปรดใส่ข้อมูล");
    } else {
      const addjob = {
        id: Math.floor(Math.random() * 1000),
        job: newJob,
      };
      setJob(job.concat(addjob));
    }
    setnewJob("");
  }
  // function editJob(id) {
  //   const edit = job.find((item) => item.id === id);
  //   console.log(edit);

  //   //   console.log(edit);
  //   //}
  //   // function toggle(){ //<-- เมื่อคลิกจะทำการเปลี่ยนค่าใน state
  //   //   setShow((item)=>!item)
  // }

  // const liStyle = {
  //   background: show ? "green" : "white",
  // };
  function removeJob(id) {
    //<--หากข้อมูล id ใน list ตรงกันจะทำการ retrun object ชุดใหม่ออกมา
    console.log(id);
    setJob(job.filter((item) => item.id !== id));
  }
  return (
    <main>
      <header>ToDoList | งานที่บันทึกไว้ตอนนี้ : {job.length}</header>
      <div>
        <ul>
          {job.map((data) => (
            <li key={data.id}>
              Job Today : {data.job}
              <div>
                <button className="delete-btn" onClick={() => removeJob(data.id)}>
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={saveJob}>
        <h2>สิ่งที่จะเพิ่ม</h2>
        <label className="box-lb">Job</label>
        <input
          className="box-ip"
          type="text"
          name="name"
          value={newJob}
          onChange={(e) => setnewJob(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">เพิ่ม</button>
      </form>
    </main>
  );
}

export default App;
