import React, { useEffect, useMemo, useState } from 'react'

const Preloader = () => {
  const [active, setActive] = useState(false);
  const [disable, setDisable] = useState(false);

  useMemo(() => {
    setTimeout(() => {
      setActive(true);
    }, 1300)
    setTimeout(() => {
      setDisable(true);
    }, 1600)
  }, [])
  return (
    <>
        <div className={`${disable ? 'hidden' : 'w-full h-screen fixed z-[999] flex'}`}>
            {[1,2,3,4,5,6,7,8].map((paper) => (
                <div key={paper} 
                  style={{
                    transition: 'ease-in .3s',
                    width: '12.5%',
                    backgroundColor: 'black',
                    height: '100%',
                    transform: `${
                      active ? paper % 2 == 0 ? 'translateY(-100%)' : 'translateY(100%)' : 'translateY(0)'
                      
                    }`
                  }}
                >
                </div>
            ))}
        </div>
        <div className="theline"></div>
    </>
  )
}

export default Preloader