import React, { Children, createContext, useState } from 'react'

export const TimeLineContext = createContext()
export const TimeLineProvider = ({children}) => {
  const [interections, setInterections] = useState([]);
  return (
    <TimeLineContext.Provider value={{interections,setInterections}}>
      {children}
    </TimeLineContext.Provider>
  )
}
