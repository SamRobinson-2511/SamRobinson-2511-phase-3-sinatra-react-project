import React, {useEffect, useState} from "react"; 
import RecordList from "./RecordCard";
import 

function RecordPage() {
  const [records, setRecords] = useState([])

  useEffect(() => {
    fetch ("http://localhost:9292/records")
    .then(resp => resp.json())
    .then(data => setRecords(data)
    )
  }, [])

  function deleteRecord(id){
    
    fetch(`http://localhost:9292/records/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify()
    })
    .then(res => res.json())
    .then(data => data)

    //deletes the anime from the animes state
    let filteredAnimes = animes.filter(anime => {
      return anime.id !== id
  })
    setAnimes(filteredAnimes)
    
  }


return (
  <main> 
    <ul className="card"> {records.map(record => <Record record = {record} deleteRecord= {deleteRecord} key= {record.id} />)} </ul>
  </main>
);

}