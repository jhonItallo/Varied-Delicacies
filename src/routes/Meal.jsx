import './MealStyle.css'
import MealDetail from '../components/sectionsApp/MealsDetail'
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom'

const Meal = () => {
  const {state} = useLocation()
  return (
    <div className='container-meal'>
      <div className='back-container'>
      <Link to={state?.from || `/`} className='back-mealDetail'>
      <IoArrowBack/>
      </Link>
      <h1>Meal Details</h1>
      </div>
      <MealDetail/>
    </div>
  )
}

export default Meal