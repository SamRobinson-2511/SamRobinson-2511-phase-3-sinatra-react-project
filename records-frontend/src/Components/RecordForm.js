import React, { useState } from 'react';

function RecordForm({addRecord}) {

    document.body.style.backgroundImage = "url('https://www.onlygfx.com/wp-content/uploads/2021/02/psychedelic-groovy-background-in-vivid-colors-8.jpg')"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"

    const [formData, setFormData] = useState({
        album_name: "",
        artist_name: "",
        label: "",
        release_date: '',
        genre: "",
        cat_num:"",
        image_url: ""
    })

    const isValid = Boolean(formData.album_name && formData.artist_name && formData.label && formData.release_date && formData.genre && formData.cat_num && formData.image_url);

    const handleForm = (e) => {
        e.preventDefault();
        
        if (isValid) {
            fetch('http://localhost:9292/records', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
            .then(res => res.json())
            .then(addRecord(formData))

        setFormData({
        album_name: "",
        artist_name: "",
        label: "",
        release_date: '',
        genre: "",
        cat_num:"",
        image_url: ""
        })

        alert('Record Added!');
        }
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        console.log(key, value)

        setFormData({
            ...formData, [key] : value
        })
    }

    return (
        <div className="form-container">
            <h2>Add to Record List</h2>
                <form onSubmit={handleForm}>
                <input type="text" name="album_name" value={formData.album_name} placeholder="e.g. The Cascades (2)  Rhythm Of The Rain" onChange={handleFormChange} />
                <input type="text" name="artist_name" value={formData.artistName} placeholder="e.g. The Cascades" onChange={handleFormChange}/>


                    <input type="text" name="label" value={formData.label} placeholder="e.g. Valiant Records (2) WS 405" onChange={handleFormChange}/>

                    <input type="text" name="release_date" value={formData.releaseDate} placeholder="e.g. 1963" onChange={handleFormChange}/>

                    <input type="text" name="genre" value={formData.genre} placeholder="e.g. rock" onChange={handleFormChange}/>

                    <input type="text" name="cat_num" value={formData.catNum} placeholder="e.g. 405" onChange={handleFormChange}/>

                    <input type="text" name="image_url" value={formData.image_url} placeholder="e.g. https://i.discogs.com/d6pYmDeqe2VCOyJbf6tIRKZzdGu4n0ltsdlOsIV_ZKY/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MzE0/NDMtMTQ2NDc5Njk2/Mi04MDkwLmpwZWc.jpeg" onChange={handleFormChange}/>
                    <button type="submit" value="submit" disabled={!isValid}>{isValid ? "Submit" : "Complete Form to Add Record"}</button>
                </form>
        </div>
    )
}

export default RecordForm;