import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Handle form submission
  const handleSubmit = () => {
    if (!email || !password || (action === "Sign Up" && !username)) {
      alert("Please fill in all required fields.");
      return;
    }

    const endpoint = action === "Sign Up" ? "Signup" : "Login";
    const payload = action === "Sign Up"
      ? { name: username, email, password }
      : { email, password };

    axios.post(`http://localhost:5000/${endpoint}`, payload)
      .then(res => {
        console.log(`${action} successful`, res.data);
        // Reset form
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch(error => {
        console.error(`Error during ${action.toLowerCase()}:`, error);
      });
  };

  return (
    <div className="container">
      <div id="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <label className="hello">Username</label>
            <input
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <label className="hello">Email</label>
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <label className="hello">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span><a href="#">Click Here</a></span>
        </div>
      )}

      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          {action}
        </button>
        <button
          className="submit toggle"
          onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}
        >
          Switch to {action === "Login" ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import './LoginSignup.css';

// const LoginSignup = () => {
//     const [action, setAction] = useState("Sign Up");
//     const [data,setData] = useState([]);
//     const [val, setVal]=useState('');
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const updateBtn = useRef(null);
//     const addBtn = useRef(null);
    
//     // useEffect(()=>{
//     //     axios
//     //     .get("http://localhost:5000/users")
//     //     .then(res=> setData(res.data))
//     //     .catch(error=> console.log(error))
//     //   },[]);
//     const handleChange = ()=>{
//         if(val.trim()==='') return;
//         setAction("Sign Up");
//         axios
//         .post("http://localhost:5000/Signup",{name: username, email: email, password: password})
//         .then(res=> {
//           setData([...data, res.data]);
//           setVal('');
//         })
//         .catch(error=> console.log(error))
//       }
//       const handleInput = (e)=>{
//         setVal(e.target.value);
//       }
//   return (
//     <>
//         <div className="container">
//             <div id="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action==="Login"?<div></div>:<div className="input">
//                     <label className="hello">Username</label>
//                     <input type="text" placeholder="Name" value={username} onChange={(e)=>setUsername(e.target.value)} />
//                 </div>}
//                 <div className="input">
//                     <label className="hello">Email</label>
//                     <input type="email" placeholder="Email Id" value={email} onChange={(e)=>setEmail(e.target.value)} />
//                 </div>
//                 <div className="input">
//                     <label className="hello">Password</label>
//                     <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//                 </div>
//             </div>
//             {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password? <span><a href="">Click Here</a></span></div>}
//             <div className="submit-container">
//               <button className="submit" ref={addBtn} onClick={handleChange}>Add</button>
//               <button className="submit" ref={updateBtn} onClick={handleChange}>Update</button>

//                 {/* <div className={action==="Login"?"submit gray":"submit"} ref={addBtn} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
//                 {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> */}
//             </div>
//         </div>
//     </>
//   )
// }

// export default LoginSignup