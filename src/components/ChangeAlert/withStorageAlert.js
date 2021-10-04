import React, { useState } from 'react'

const withStorageAlert = (WrappedComponent) => {
    return function WrappedComponentWithStorageAlert(props) {
        const [storageChange, setStorageChange] = useState(false)
        window.addEventListener("storage", (storage) => {
            if(storage.key === "TODOS_V1") {
                setStorageChange(!storageChange)
            }
        })
        const sincronized = () => {
            props.sincronized()
            setStorageChange(false)
        }
        return <WrappedComponent 
        show={storageChange} 
        toggleShow={sincronized} 
        />
    }
}

export {withStorageAlert}
