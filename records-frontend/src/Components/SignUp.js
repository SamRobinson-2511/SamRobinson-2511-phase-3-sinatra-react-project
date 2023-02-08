import React, { useState } from 'react';

function SignUp({createAnAccount}) {

  document.body.style.backgroundImage = "url('https://www.creativefabrica.com/wp-content/uploads/2022/08/18/Groovy-psychedelic-background-design-Graphics-36483874-1.jpg')"
  document.body.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const isValid = Boolean(formData.name && formData.email && formData.password);

  const handleNewAccount = (e) => {
      e.preventDefault();
      if (isValid) {
          fetch('http://localhost:9292/collectors', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(formData)
          })
          .then(res => res.json())
          .then(createAnAccount(formData))

      setFormData({
        name: "",
        email: "",
        password: ""
      })

      alert('Get Collecting!');
      }
  }

  const handleFormChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    setFormData({
        ...formData, [key] : value
    })
  }

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleNewAccount}>
          <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="e.g. Jane Doe"></input>
          <input type="text" name="email" value={formData.email} onChange={handleFormChange} placeholder="e.g. Jane_Doe@flatiron.com"></input>
          <input type="password" name="password" value={formData.password} onChange={handleFormChange} placeholder="Enter password..."></input>
          <button>{ isValid ? "Sign Up!" : "Missing info" }</button>
      </form>
    </div>
  )
}

export default SignUp;