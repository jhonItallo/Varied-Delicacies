import {useState, useEffect} from 'react'
import {  Link } from 'react-router-dom'
import { VscLoading } from "react-icons/vsc"

import axios from 'axios'

import './CategoriesStyle.css'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() =>{
    const fetchCategories = async () =>{
      try{
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setCategories(response.data.categories)
      }catch(erro){
        setError('Erro ao buscar dados, tente mais tarde')
        console.log('Erro no Categories',erro)
      }finally{
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  if(loading){
    <span className='load'><VscLoading/></span>
  }
  if(error){
    return <h1>{error}</h1>
  }
  return (
    <div className='categories-container'>
      <div className='title-container'>
        <h1>Categories</h1>
      </div>
      <div className='categoriesList'>
      {loading ?(
        <span className='load'><VscLoading/></span>
      ):(
        categories.map((category) =>(
          <div className='category-card' key={category.idCategory}>
            <h2>{category.strCategory}</h2>
            <Link to={`/category/${category.strCategory}`} className='category-link'>
              <img src={category.strCategoryThumb} alt={category.strCategory} />
            </Link>
          </div>
        ))
      )

      }
      </div>
    </div>
  )
}

export default Categories