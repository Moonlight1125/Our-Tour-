import React from 'react'
import Styles from '../components/Reflesh.module.css'
const Reflesh = () => {
  const handleReload = ()=>{
    window.location.reload();
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.notice}>
        <h1>No Tours Left</h1>
      </div>
      <div className={Styles.btn}>
        <button className={Styles.btn__child} onClick={handleReload}>Reflesh</button>
      </div>
    </div>
  )
}

export default Reflesh