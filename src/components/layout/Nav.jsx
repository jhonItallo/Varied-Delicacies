import { useState, useEffect, useContext } from 'react'
import { GlobalStateContext } from '../stateGlobal/GlobalStateContext'
import axios from 'axios'

import'./NavStyle.css'

const Nav = () => {

  const {setIsTrue, setSelectedCategoryDescription, setSelectedCategoryTitle} = useContext(GlobalStateContext)
  const [clickToggle, setClickToggle] = useState(false)
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)


  useEffect(() =>{
    const fecthCategorie = async () =>{
      try{
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategories(response.data.categories)
      }catch(erro){
        setError('An error occurred while fetching data, try later.')
      }
    }
    fecthCategorie()
  }, [])
  const handleToggle = () =>{
    setClickToggle(!clickToggle)
  }

  const handleCategoryClick = (title , description) =>{
    setIsTrue(true)
    setSelectedCategoryTitle(title)
    setSelectedCategoryDescription(description)
  }

  return (
    <nav className='nav'>
      <div className='logo'>
        <span></span>
        <h1>Varied Delicacies</h1>
      </div>
      <div>
      <div className={`nav-toggle ${clickToggle === true ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <div className={`description-categories ${clickToggle == true ? 'active' : ''}`}>
          {categories.map((category)=>(
            <button key={category.idCategory} onClick={() => handleCategoryClick(category.strCategory ,category.strCategoryDescription)}>
              {category.strCategory}
            </button>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Nav