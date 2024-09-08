import { useState } from 'react'
import axios from 'axios'
import {FaSearch} from 'react-icons/fa'
import { VscLoading } from "react-icons/vsc";
import { Link } from 'react-router-dom'

import './SearchStyle.css'

const SearchMeals = () => {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [inputError, setInputError] = useState('search to meals')

 const handleSearch = async (e) =>{
  e.preventDefault()

  if(!query.trim()){
    setInputError('type something to search')
    return
  }else{
    setInputError('search to meals')
  }

   setError(null)
   setLoading(true)
   try{
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    setMeals(response.data.meals || [])
   }catch(error){
    console.log('erro na promisse SearchMeals: ', error)
    setError('Erro ao buscar dados tente mais tarde')
   }finally{
    setLoading(false)
   }
 }
  return (
    <div className='search-meal'>
      <div className='container-search'>
        <h1>welcome to <span>varied delicacies</span></h1>
        <form className='search'>
        <div className='inputBox'>
           <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} required/>
           <label>
            <h2>{inputError}</h2>
           </label>
        </div>
        <button className='btn-search' onClick={handleSearch}><FaSearch/></button>
        </form>
      </div>
      {
        error && <h1 className='error'>{error}</h1>
      }
      <div className='meals-result'>
        {meals.length > 0 ?(
          meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
            <h2>{meal.strMeal}</h2>
            <Link to={`/meal/${meal.idMeal}`} className='link-search'>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
          </div>
          ))
        ) :(
          !loading && <h1>Nenhuma refeição encontrada</h1>
        )

        }
      </div>
    </div>
  )
}

export default SearchMeals