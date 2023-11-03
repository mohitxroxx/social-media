import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const TopBar = () => {
  const {theme} = useSelector(state=>state.theme)
  
    return (
    <div>
      TopBar
    </div>
  )
}

export default TopBar
