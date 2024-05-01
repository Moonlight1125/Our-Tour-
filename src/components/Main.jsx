import React, { useEffect, useState } from 'react'
import Animaion from './Animaion'
import Show from '../components/Show'
import Tours from '../components/Data.json'
import Styles from '../components/Main.module.css'
import Reflesh from './Reflesh'
const url = 'https://course-api.com/react-tours-project'
const Main = () => {
  console.log({...Tours})
    const [data,setData] = useState(null);
    const [condition,setCondition]= useState(false);
    const [res,setRes] = useState(Tours.length);

    const handleReflesh = (sort)=>{
      setRes(sort);
      if(sort===0){
        setCondition(false)
      }
    }

    const handleShow = ()=>{
      setTimeout(()=>{
        setCondition(true)
      },1000)
    }
    useEffect(()=>{
      setData(Tours);
      handleShow();
    },[])
return (
    <div className={Styles.backgorund}>
      <Animaion/>
      <main>
      {condition&&<Show handleReflesh={handleReflesh} material={data}/>}
      </main>
      {res===0&&<Reflesh/>}
    </div>
  )
}

export default Main