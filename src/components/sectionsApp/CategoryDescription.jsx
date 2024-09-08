import {useContext, useEffect, useState} from 'react'
import { GlobalStateContext } from '../stateGlobal/GlobalStateContext'
import { TiDelete } from "react-icons/ti";
import axios from 'axios'

import './CategoryDescriptionStyle.css'

const CategoryDescription = () => {

    const { setIsTrue, setSelectedCategoryTitle, setSelectedCategoryDescription} = useContext(GlobalStateContext)
    const { isTrue, selectedCategoryDescription, selectedCategoryTitle } = useContext(GlobalStateContext)
    const [animationIntro, setAnimationIntro] = useState('')

    useEffect(() =>{
      if(selectedCategoryTitle, selectedCategoryDescription){
        setAnimationIntro('')
        setTimeout(()=>{
          setAnimationIntro('active')
        }, 500)
      }
    }, [selectedCategoryDescription, selectedCategoryTitle])

    const handleActive = () =>{
     setIsTrue(false)
     setSelectedCategoryTitle(null)
     setSelectedCategoryDescription(null)
    }

  return (
    <div className={`wrapper-description-category ${animationIntro}`}>
        {isTrue && selectedCategoryDescription && selectedCategoryTitle && (
          <div className='description-category'>
            <button onClick={handleActive} className='button-active-description'>
            <TiDelete />
            </button>
            <h2>{selectedCategoryTitle}</h2>
            <p>{selectedCategoryDescription}</p>
          </div>
        )}
    </div>
  )
}

export default CategoryDescription