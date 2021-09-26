import React,  { useState, useEffect }  from 'react'

const useLocalStore = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isCompleted, setIsCompleted] = useState(false)
    
    useEffect(() => {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName)
      let parsedItem = initialValue
      
      if(!localStorageItem) 
        localStorage.setItem(itemName, JSON.stringify(parsedItem))
      else
        parsedItem = JSON.parse(localStorageItem)
  
      setIsLoading(false)
      setIsCompleted(true)
    
      }, 1000);
    }, [])
    
    const saveItems = (Items) => {
      setItem(Items)
      let jsonItems = JSON.stringify(Items)
      localStorage.setItem(itemName, jsonItems)
    }
    
    return {
      item,
      saveItems,
      isError, 
      isLoading,
      isCompleted
    }
    
  }

export { useLocalStore }