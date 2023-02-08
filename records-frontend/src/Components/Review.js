import React,{useState, useEffect} from "react";

function Review({reviews, handleDelete, setReviews}) {
    const [collector, setCollector] = useState({})
    const[showEdit, setShowEdit] = useState(false)
    const [comment, setComment] = useState(reviews.comment)
    const [rate, setRate] = useState(reviews.rating)
    
    useEffect(() => {
      fetch(`http://localhost:9292/records/${reviews.collector_id}`)
      .then(resp => resp.json())
      .then(data => setCollector(data))
      },[])
    
     
    function handleEdit(e){
      e.preventDefault()
     
      fetch(`http://localhost:9292/reviews/${reviews.id}`, {
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(
          {rating: rate,
        comment: comment}
        )
      })
      .then(res => res.json())
      .then(data => data)
      
    
      fetch(`http://localhost:9292/records/${reviews.record_id}/reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data))

      setShowEdit(!showEdit)

    }
    function handleClick(){
        handleDelete(reviews.id)
    }
  
     
    
    return (
        <div>
          <h3>Rating:</h3> 
          <h4>{reviews.rating} / 10</h4>
          <h3>Comment: </h3>
          <p>{reviews.comment}</p>
          <i>Created by: {collector.name}</i>

          <button id = "button-review-delete" onClick = {handleClick}>Delete Review</button> 
          <button id = "button-edit-review" onClick = {handleEdit}>Edit Review</button> 
          {showEdit ? 
          <div className="form">
        <form onSubmit={handleEdit}>
          <h3>Edit Review</h3>
          
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"
            name="name"
            placeholder="Record Rating"
            // id="description"
          />
                 
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="textarea"
            name="name"
            placeholder="Comment"
            className="input-text"
          />
          <br />
          
          <input
            type="submit"
            name="submit"
            value="Submit edit"
            className="submit"
          />
        </form>
        </div> : <p></p>}


          </div> 
      );
}

export default Review