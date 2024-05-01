import React, { useEffect, useRef } from 'react'
import Styles from '../components/Animation.module.css'

const Animaion = () => {
    const getDashArray = useRef(null);
    useEffect(()=>{
        const length = getDashArray.current.getTotalLength();
    },[getDashArray])

  return (
    <div>
        <div className={Styles.container}>
            <svg className={Styles.circle__size} xmlns="http://www.w3.org/2000/svg">
                <circle ref={getDashArray} className={Styles.circle__fake} r="100" cx="50%" cy="50%" fill="red" />
                <circle ref={getDashArray} className={Styles.circle} r="100" cx="50%" cy="50%" fill="red" />
            </svg> 
        </div>
    </div>
  )
}

export default Animaion