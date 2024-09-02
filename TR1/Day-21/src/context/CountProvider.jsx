import React, { createContext, useState } from 'react'

export const CountContext = createContext();

const CountProvider = ({children}) => {
    const [countValue , setCountValue] = useState(0);
  return (
    <CountContext.Provider value={{countValue , setCountValue}}>
        {children}
    </CountContext.Provider>
  )
}

export default CountProvider