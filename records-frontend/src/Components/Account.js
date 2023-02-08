
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account({user, handleDeletedUser, handleUpdatedUser}) {
    
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/colorful-groovy-psychedelic-hand-drawn-background_23-2149074833.jpg?w=2000')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    const [deleteClicked, setDeleteClicked] = useState(false)
    const [nameClicked, setNameClicked] = useState(false)
    const [emailClicked, setEmailClicked] = useState(false)
    const [passwordClicked, setPasswordClicked] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameClick = () => {
        setNameClicked(!nameClicked)
    }
    const handleEmailClick = () => {
      setEmailClicked(!emailClicked)
  }
    const handlePasswordClick = () => {
        setPasswordClicked(!passwordClicked)
    }

    let navigate = useNavigate();
    const handleDeleteClick = () => {
        setDeleteClicked(!deleteClicked)
        fetch(`http://localhost:9292/collectors/${user[0].id}`, {
            method: "DELETE"
        })
        handleDeletedUser(user[0].id)

        alert('Account deleted successfully')

        let path = '/';
        navigate(path);
    }

    const updateUserName = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/collectors/${user[0].id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        })
        .then(res => res.json())
        .then(updatedUser => handleUpdatedUser(updatedUser))
    
        setName("")
        setNameClicked(false)
    
        alert('Account has been updated.');
    }

    const updateUserEmail = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/collectors/${user[0].id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(updatedUser => handleUpdatedUser(updatedUser))
    
        setEmail("")
        setEmailClicked(false)
    
        alert('Email has been updated.');
    }

    const updateUserPassword = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/collectors/${user[0].id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({password: password})
        })
        .then(res => res.json())
        .then(updatedUser => handleUpdatedUser(updatedUser))
    
        setPassword("")
        setPasswordClicked(false)
    
        alert('Password has been updated.');
    }

    return (
        <div className="account-container">
            <button onClick={ handleDeleteClick }>Delete Account</button>
            { (user.length > 0) &&
                <div className="user-details-container">
                    { !nameClicked ? <p onClick={ handleNameClick }>Name: { user[0].name } ✏️</p>
                        : 
                            <form onSubmit={ updateUserName }>
                                <input type="text" name="name" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Enter a new name"></input>
                                <button type="submit">Submit</button>
                            </form>
                    }

                    { !emailClicked ?  <p onClick={ handleEmailClick }>Email: { user[0].email } ✏️</p>
                        : 
                            <form onSubmit={ updateUserEmail }>
                                <input type="text" name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="Enter a new email"></input>
                                <button type="submit">Submit</button>
                            </form>
                    }
                    
                    { !passwordClicked ? <p onClick={ handlePasswordClick }>Password: { user[0].password } ✏️</p>
                        :
                            <form onSubmit={ updateUserPassword }>
                                <input type="text" name="password" value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder="Enter a new password"></input>
                                <button type="submit">Submit</button>
                            </form>
                    }
                </div>
            }
        </div>
    )
}

export default Account;