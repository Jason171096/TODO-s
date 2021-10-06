import { useState } from "react";

const useStorageAlert = (sincronized) => {
  const [storageChange, setStorageChange] = useState(false);
  window.addEventListener("storage", (storage) => {
    if (storage.key === "TODOS_V1") {
      setStorageChange(!storageChange);
    }
  });
  const toggleShow = () => {
    sincronized();
    setStorageChange(false);
  };
//   return <WrappedComponent show={storageChange} toggleShow={sincronized} />;
  return {show:storageChange, toggleShow};
};

export { useStorageAlert };
