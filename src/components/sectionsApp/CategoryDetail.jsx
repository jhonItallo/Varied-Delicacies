import { useState, useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { VscLoading } from 'react-icons/vsc'
import {IoArrowBack} from 'react-icons/io5'
import axios from 'axios'
import './CategoryDetailStyle.css'


const CategoryDetail = () => {
  const { categoryName} = useParams()
  const [meals, setMeal] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() =>{
    console.log(`Fetching meals for category: ${categoryName}`)
    const fecthCategoryDetail = async () =>{
      try{
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        setMeal(response.data.meals || [])
        console.log('resposta: ', response.data.meals)
      }catch(erro){
        console.log('Erro em categoryDetail: ', erro)
        setError('Erro ao carregar dados por favor tente mais tarde')
      }finally{
        setLoading(false)
      }
    }
    fecthCategoryDetail()
  },[categoryName])

  if(error){
    return <p>{error}</p>
  }
  return (
    <div className='meal-list'>
      <div className='category-name'>
      <Link to={`/`} className='back-categoryDetail'>
            <IoArrowBack/>
      </Link>
      <h1>{categoryName}</h1>
      </div>
      <div className='mealCategory-result'>
      {loading  ?(
        <span className='load'><VscLoading/></span>
    
     ):(
      meals.map((mealCategory) =>(
        <div className='mealCategory-card' key={mealCategory.idMeal}>
          <Link 
          to={`/meal/${mealCategory.idMeal}`}
          state={{ from: `/category/${categoryName}` }} 
          className='categoryIMG-link'>
          <img src={mealCategory.strMealThumb} alt={mealCategory.strMeal} />
          </Link>
          <div className='text-category'>
          <h2>{mealCategory.strMeal}</h2>
          </div>
        </div>
      )))

      }
      </div>

    </div>
  )
}

export default CategoryDetail