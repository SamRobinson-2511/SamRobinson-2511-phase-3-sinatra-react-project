import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RecordList from "./RecordList";
import MyCollection from "./MyCollection";
import Account from "./Account";
import Links from "./Links";
import SignUp from './SignUp';
import Login from "./Login";
import RecordForm from "./RecordForm";

function AppRouter() {
    
    const [records, setRecords] = useState([])
    const [collectors, setCollectors] = useState([])
    const [recordsInMyCollection, setRecordsInMyCollection] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/records")
            .then(res => res.json())
            .then(records => setRecords(records));
    }, []);

    useEffect(() => {
        fetch("http://localhost:9292/collectors")
            .then(res => res.json())
            .then(collectors => setCollectors(collectors));
    }, []);

    const addRecord = (newRecord) => {
      setRecords([...records, newRecord]);
  }

  const handleAddToCollectionClick = (record) => {
      if (recordsInMyCollection.includes(record)) {
      }
      else {
          setRecordsInMyCollection([...recordsInMyCollection, record])
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

 
  return (
      <div>
          <Links
              user={user}
          />
          <Routes>
              <Route exact path="/" element={
                  <RecordList
                      records={records} 
                      handleAddToColletionClick={handleAddToCollectionClick}
                  />}
              />
              <Route path="/collection" element={
                  <MyCollection
                      recordsInMyCollection={recordsInMyCollection}
          
                      setRecordsInMyCollection={setRecordsInMyCollection}
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
              <Route path="*" element={
                  <Navigate to="/" replace />}
              />
          </Routes>
      </div>
  )
}

export default AppRouter;