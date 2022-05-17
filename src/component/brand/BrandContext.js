import{ createContext } from 'react'


export   const brandName  = createContext()
const BrandContext = (props) => {
  return (
    <brandName.Provider value=" Travel Guide">
      {props.children}
    </brandName.Provider>
  )
}

export default BrandContext
