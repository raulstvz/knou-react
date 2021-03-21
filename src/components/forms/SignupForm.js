import { React, useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";
import Logo from "../logo/Logo";
import Button from "../button/Button";
import validateEmail from "../../utils/validateEmail"
import { API_ROOT } from "../../utils/hostSettings";


const SignUpForm = () => {
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStyle, setErrorStyle] = useState({
    'firstname': 'errorInvisible',
    'lastname': 'errorInvisible',
    'email': 'errorInvisible',
    'password': 'errorInvisible',
  });
  //Body
  const body = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    created: new Date(),
    premium: false,
    signup_step: 0,
  };
  console.log(body);
  //Fetch function
  const handleCreate = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const validation = {
      'firstname': firstname.length > 0 ? 'errorInvisible' : 'errorVisible',
      'lastname': lastname.length > 0 ? 'errorInvisible' : "errorVisible",
      'email': validateEmail(email) ? 'errorInvisible' : "errorVisible",
      'password': password.length > 5 ? 'errorInvisible' : "errorVisible"
    }
    setErrorStyle(validation);
    if (!Object.values(validation).find(value => value === 'errorVisible')) {
      fetch(`${API_ROOT}/api/users", options`).then(async () => {
        return await fetch(`${API_ROOT}/api/auth/login`, options)
          .then((response) => response.json())
          .then((json) => {
            localStorage.setItem("token", json.token);
            localStorage.setItem("user", JSON.stringify(json.user));
            history.replace("/create-account");
            window.location.reload(false);
          });
      });
    }
  }
  const goToLogIn = () => {
    history.push("/login");
  };
  return (
    <form className="sideform__container">
      <div className="sideform__subcontainer">
        <div className="form__logo__button">
          <Logo />
          <Button name="Login" style="button_white_small" onClick={goToLogIn} />
        </div>
        <span className="form__span">START FOR FREE</span>
        <h2 className="form__title">Create an account</h2>
        <input
          name="source"
          type="text"
          className={errorStyle.firstname}
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <span className={errorStyle.firstname}>You must be write something...</span>
        <input
          name="source"
          type="text"
          className={errorStyle.lastname}
          placeholder="Last Name"
          onChange={(e) => setLastname(e.target.value)}
        />
        <span className={errorStyle.lastname}>You must be to write something...</span>
        <input
          className={errorStyle.email}
          placeholder="Email"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className={errorStyle.email}>Invalid email</span>
        <input
          name="source"
          className={errorStyle.password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className={errorStyle.password}>Password must be 5 characters long</span>
        <div className="button__container">
          <Button
            name="Get Started"
            style="button_dark_great"
            onClick={handleCreate}
          />
        </div>
        <p className="signupAdnsLogin_form">
          {" "}
          Already have an account?{" "}
          <span
            className="colorPurple"
            onClick={() => {
              history.push("/login");
            }}
          >
            {" "}
            Sign in{" "}
          </span>
        </p>
      </div>
    </form>
  );
};
export default SignUpForm;





// import { React, useState } from "react";
// import { useHistory } from "react-router";
// import "./Forms.css";
// import Logo from "../logo/Logo";
// import Button from "../button/Button";
// import validateEmail from "../../utils/validateEmail"
// import { API_ROOT } from "../../utils/hostSettings";


// const SignUpForm = () => {
//   const history = useHistory();
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorStyle, setErrorStyle] = useState({
//     'firstname': 'errorInvisible',
//     'lastname': 'errorInvisible',
//     'email': 'errorInvisible',
//     'password': 'errorInvisible',
//   });
//   //Body
//   const body = {
//     firstname: firstname,
//     lastname: lastname,
//     email: email,
//     password: password,
//     created: new Date(),
//     premium: false,
//     signup_step: 0,
//   };
//   console.log(body);
//   //Fetch function
//   const handleCreate = () => {
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     };
//     const validation = {
//       'firstname': firstname.length > 0 ? 'errorInvisible' : 'errorVisible',
//       'lastname': lastname.length > 0 ? 'errorInvisible' : "errorVisible",
//       'email': validateEmail(email) ? 'errorInvisible' : "errorVisible",
//       'password': password.length > 5 ? 'errorInvisible' : "errorVisible"
//     }
//     else {
//       fetch(`${API_ROOT}/api/users`, options).then(async () => {
//         return await fetch(`${API_ROOT}/api/auth/login`, options)

//     setErrorStyle(validation);
//     if (!Object.values(validation).find(value => value === 'errorVisible')) {
//       fetch(`${API_ROOT}/api/users`, options).then(async () => {
//         return await fetch(`${API_ROOT}/api/auth/login`, options)

//           .then((response) => response.json())
//           .then((json) => {
//             localStorage.setItem("token", json.token);
//             localStorage.setItem("user", JSON.stringify(json.user));
//             history.replace("/create-account");
//             window.location.reload(false);
//           });
//       });
//     }
//   }
//   const goToLogIn = () => {
//     history.push("/login");
//   };
//   return (
//     <form className="sideform__container">
//       <div className="sideform__subcontainer">
//         <div className="form__logo__button">
//           <Logo />
//           <Button name="Login" style="button_white_small" onClick={goToLogIn} />
//         </div>
//         <span className="form__span">START FOR FREE</span>
//         <h2 className="form__title">Create an account</h2>
//         <input
//           name="source"
//           type="text"
//           className={errorStyle.firstname}
//           placeholder="First Name"
//           onChange={(e) => setFirstname(e.target.value)}
//         />
//         <span className={errorStyle.firstname}>You must be write something...</span>
//         <input
//           name="source"
//           type="text"
//           className={errorStyle.lastname}
//           placeholder="Last Name"
//           onChange={(e) => setLastname(e.target.value)}
//         />
//         <span className={errorStyle.lastname}>You must be to write something...</span>
//         <input
//           className={errorStyle.email}
//           placeholder="Email"
//           type="text"
//           name="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <span className={errorStyle.email}>Invalid email</span>
//         <input
//           name="source"
//           className={errorStyle.password}
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <span className={errorStyle.password}>Password must be 5 characters long</span>
//         <div className="button__container">
//           <Button
//             name="Get Started"
//             style="button_dark_great"
//             onClick={handleCreate}
//           />
//         </div>
//         <p className="signupAdnsLogin_form">
//           {" "}
//           Already have an account?{" "}
//           <span
//             className="colorPurple"
//             onClick={() => {
//               history.push("/login");
//             }}
//           >
//             {" "}
//             Sign in{" "}
//           </span>
//         </p>
//       </div>
//     </form>
//   );

        
// export default SignUpForm;
