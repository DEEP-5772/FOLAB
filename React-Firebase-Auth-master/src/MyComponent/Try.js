import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Try = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;    
    const getuserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
        setUser1({ ...user, [name]: value });
    };


    const signUP = async (e) => {
        e.preventDefault();

        const { email, password, cpassword } = user;

            if (email && password && cpassword) {

            const res = await fetch("https://finaltest-ac206-default-rtdb.firebaseio.com/signup.json",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                        cpassword,
                    })
                }
            );

            if (res) {
                setUser({
                    email: "",
                    password: "",
                    cpassword: "",
                });

                alert("SignIn Successfully!!");
            }
        }
        else {
            alert("Enter your details properly!!");
        }

    };

    

    const [user1, setUser1] = useState({
        Email: "",
        Password: "",
    });

    const LogIn = async (e1) => {
        e1.preventDefault();

        const { Email, Password } = user1;


        if (Email && Password) {

            const res1 = await fetch("https://finaltest-ac206-default-rtdb.firebaseio.com/login.json",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        Email,
                        Password,
                    }),
                },
            );

            if (res1) {
                setUser1({
                    Email: "",
                    Password: "",
                });
                alert("LogIn Successfully!!");
            }

        }
        else {
            alert("Enter your email and Password !!");
        }

    };

    return (

        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
            </head>
            <body className="be" >
                <div className="main"  method="POST">
                    <input type="checkbox" id="chk" aria-hidden="true" />
                    <div className="signup">
                        <form>
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input className="mx-5 my-2" type="email" name="email" value={user.email} onChange={getuserData} placeholder="E-mail" required />
                            <input className="mx-5 my-2" type="password" name="password" value={user.password} onChange={getuserData} placeholder="Password" required />
                            <input className="mx-5 my-2" type="password" name="cpassword" value={user.cpassword} onChange={getuserData} placeholder="Password" required />
                            <button className="mx-5 my-2" onClick={signUP}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form method="POST">
                            <label for="chk" aria-hidden="true">Log in</label>
                            <input className="mx-5 my-2" type="email" name="Email" value={user1.Email} onChange={getuserData}  placeholder="Email" required />
                            <input className="mx-5 my-2" type="password" name="Password" value={user1.Password}  onChange={getuserData} placeholder="Password" required />
                            <button className="mx-5 my-2"  onClick={LogIn}>Login</button>
                        </form>
                    </div>
                </div>
            </body>
        </html>


    )
}



export default Try


// name="Email" value1={user1.Email} onChange={getuserData}
// name="Password" value1={user1.Password}
// onClick={LogIn}



{/* // value={user.email} onChange={getuserData} 
// value={user.password} onChange={getuserData}
// value={user.cpassword} onChange={getuserData} */}
{/* onClick={signUP} */ }