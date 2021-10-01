import { useState, useEffect }  from 'react'

const useLocalStore = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)
    
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
    }
    
  }

export { useLocalStore }