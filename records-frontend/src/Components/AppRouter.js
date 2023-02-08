import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RecordList from "./RecordList";
import Collection from "./Collection";
import Account from "./Account";
import Links from "./Links";
import SignUp from './SignUp';
import Login from "./Login";
import RecordForm from "./RecordForm";
import Header from "./Header";
import ReviewForm from "./ReviewForm";

function AppRouter() {
    
    const [records, setRecords] = useState([])
    const [collectors, setCollectors] = useState([])
    const [recordsInCollection, setRecordsInCollection] = useState([])
    const [user, setUser] = useState([])
    const [reviews, setReviews] = useState ([])
    const [showReviews, setShowReviews] = useState ([])
    

    useEffect(() => {
        fetch("http://localhost:9292/records")
            .then(res => res.json())
            .then(records => setRecords(records));
    }, []);
console.log(records)
    // useEffect(() => {
    //     fetch("http://localhost:9292/collectors")
    //         .then(res => res.json())
    //         .then(collectors => setCollectors(collectors));
    // }, []);


    
  function handleAddReview() {

      if(showReviews == false){
      fetch(`http://localhost:9292/records/${records[0].id}/reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data))
      }
      else{
        setReviews([])
        
      }
      setShowReviews(!showReviews)
      
}

    const addRecord = (newRecord) => {
      setRecords([...records, newRecord]);
  }

    
  const handleAddToCollectionClick = (e, record) => {
      if (recordsInCollection.includes(record)) {
      }
      else {
          setRecordsInCollection([...recordsInCollection, record])
      }
  }
    
  const createAnAccount = (newCollector) => {
      setCollectors([...collectors, newCollector])
  }

  const handleDeletedUser = (userId) => {
      setCollectors(collectors.filter(collector => collector.id !== userId))
      setUser([])
  }

  const handleUpdatedUser = (updatedUser) => {
      const updateCollectors = collectors.map(collector => collector.id === updatedUser.id ? updatedUser : collector)

      setCollectors(updateCollectors)
      setUser([updatedUser])
  }
  function handleDeleteCard(id){
    const newRecordsArray = records.filter((record)=>record.id !== id)
    setRecords(newRecordsArray) 
    }
  

 
  return (
      <div>
        <Header />
          <Links
              user={user}
          />
          <Routes>
              
              <Route path="/collection" element={
                  <Collection
                      recordsInCollection={recordsInCollection}
          
                      setRecordsInCollection={setRecordsInCollection}
                      user={user}
                      collectors={collectors}
                  />}
              />
              { user.length > 0 &&
                  <Route path="/account" element={
                      <Account
                          user={user}
                          handleDeletedUser={handleDeletedUser}
                          handleUpdatedUser={handleUpdatedUser}
                      />}
                  />
              }
              <Route path="/record-form" element={
                  <RecordForm
                      addRecord={addRecord}
                  />}
              />
              <Route path="/login" element={
                  <Login
                      setUser={setUser}
                      user={user}
                      collectors={collectors}
                  />}
              />
              <Route path="/signup" element={
                  <SignUp
                      createAnAccount={createAnAccount}
                  />}
              />
              <Route exact path="/" element={
                  <RecordList
                      records={records} 
                      handleAddToColletionClick={handleAddToCollectionClick}
                      handleAddReview ={handleAddReview}
                      handleDeleteCard ={handleDeleteCard}
                  />}
              />
              <Route path="*" element={
                  <Navigate to="/" replace />}
              />
          </Routes>
      </div>
  )
}

export default AppRouter;