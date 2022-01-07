import "./App.css";
import moment from "moment";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [state,setstate] = useState({
    datecontext: moment(),
    today: moment(),
    showmonthpopup: false,
    showyearpopup: false
  });
const [nav, setnav] = useState(false)
  
  const year = () => {
    return state.datecontext.format("Y");
  };
  const month = () => {
    return state.datecontext.format("MMMM");
  };
  let daysinmonth = () => {
    return state.datecontext.daysInMonth();
  };
  const currentdate = () => {
    return state.datecontext.get("date");
  };
  const currentday = () => {
    return state.datecontext.format("D");
  };
  const firstdayofmonth = () => {
    let firstday = moment(state.datecontext).startOf("month").format("d"); //0 to 6
    return firstday;
  };
  const months = moment.months();

  let blanks = [];
  for (let i = 0; i < firstdayofmonth(); i++) {
    blanks.push(<td>{""}</td>);
  }

  // console.log(blanks);
  

  let daysofmonth = [];
  for (let d = 1; d <= daysinmonth(); d++) {
    // let className = d == currentday() ? "currday" : "";
    daysofmonth.push(<td className={d == currentday() ? "currentday" : ""}>{d}</td>);
  }
  // console.log(daysofmonth);

  const arr = [...blanks,...daysofmonth];
  const twod = [];
  let oned = [];
  arr.forEach((data, i) => {
    if ((i % 7) !== 0) {
      oned.push(data);
    } else {
      let row = oned.slice();
      twod.push(row);
      oned = [];
      oned.push(data);
    }
    if (i === arr.length - 1) {
      let row = oned.slice();
      twod.push(row);
    }
  });


  let trelems = twod.map((row,i)=>{
    return(<tr key={i*3}>{row}</tr>)
  })

const setmonth=(e,data)=>{
  let monthno=months.indexOf(data);
 console.log("monthno is" , monthno);

  let datecontext=Object.assign({},state.datecontext);
  datecontext=moment(datecontext).set("month",monthno);
  //const setstate=()=>({
  //     datecontext:datecontext
  // });
  return(
  console.log("monthno is" , monthno),
 setstate
  )
  
}

const setyear =(year)=>{
  let datecontext=Object.assign({},state.datecontext);
  datecontext = moment(datecontext).set("year",year);
  setstate({
      datecontext:datecontext
})
}

const onyearchange=(e)=>{
  setyear(e.target.value);

}
const onkeyupyear=(e)=>{
  if(e.which==13){
    setyear(e.target.value)
  }
}

  return (
    <>
      <div className="th-container d-flex flex-column justify-content-center align-items-center">
        <h1 className="h1 pt-5">Calender</h1>
        <div className="pb-3 th-w ">
          <select name="month" id="" className="ms-3">
            {/* <option value="" id="" className=""disabled selected value >month</option> */}
        
            {
              months.map((month)=>{
                return(
                  <option id={month} className="" onClick={(e,data)=>{setmonth(e,data)},console.log("monthno is" ) }>
                     {month}
                 </option>
                )
              })

            }

          </select>
            {
              nav?<input type="text" className="th-pos me-3" />:<span id="" className="th-pos me-3" onClick={()=>setnav(true)} onkeyUp={(e)=>{onkeyupyear(e)}} onChange={(e)=>{onyearchange(e)}} >
            {year()}
          </span>

            }
          
        </div>
        <table className="th-w">
          <thead>
            <tr id="0" className="">
              <th id="" className="">
                Sun
              </th>
              <th id="" className="">
                Mon
              </th>
              <th id="" className="">
                Tue
              </th>
              <th id="" className="">
                Wed
              </th>
              <th id="" className="">
                Thu
              </th>
              <th id="" className="">
                Fri
              </th>
              <th id="" className="">
                Sat
              </th>
            </tr>
          </thead>

          <tbody>
            {trelems}

          </tbody>
        </table>

        <div id="" className="pt-3 th-w row">
          <button id="" className="px-3 col-3">
            &lt;&lt;
          </button>
          <button id="" className="px-3 col-3">
            &lt;
          </button>
          <button id="" className="px-3 col-3">
            &gt;
          </button>
          <button id="" className="px-3 col-3">
            &gt;&gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
