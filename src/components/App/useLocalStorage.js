import React,  { useState, useEffect }  from 'react'

const useLocalStore = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue)
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
        
      saveItems(parsedItem)
      setIsLoading(false)
      setIsCompleted(true)
      
      }, 0);
    }, [])
    
    const saveItems = (Items) => {
      setItem(Items)
      let jsonItems = JSON.stringify(Items)
      localStorage.setItem(itemName, jsonItems)
    }
    
    return {
      item,
      saveItems,
      isLoading,
      isCompleted
    }
    
  }

export { useLocalStore }