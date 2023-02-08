import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({setUser, collectors, user}) {

  document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/013/652/170/original/retro-groovy-wavy-rainbow-background-background-in-the-style-of-the-70s-and-80s-abstract-vintage-colorful-design-hand-drawn-flat-illustration-vector.jpg')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = 'cover'

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    setFormData({
        ...formData, [key] : value
    })
  }

  let navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (user.length === 0) {
      const findUser = collectors.filter(collector => (collector.email && collector.password) === (formData.email && formData.password))
      setUser(findUser)
    }
    
    let path = '/';
    navigate(path);
  }
  
  return (
    <div className="login-container">
      { user.length > 0 ? console.log("Logged in successfully!") 
        :
        <div className="login-container-inner">
            <h2>Login to your account</h2>
            <form onSubmit={handleLogin}>
              <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
              <button>Sign In</button>
            </form>
          </div> 
      }
    </div>
  )
}

export default Login;