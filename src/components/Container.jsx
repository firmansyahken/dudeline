import React from 'react'

const Container = ({children, styles}) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-6 container ${styles}`}>
        {children}
    </div>
  )
}

export default Container