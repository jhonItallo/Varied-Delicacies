import { useEffect, useState } from 'react';
import axios from 'axios';
import { VscLoading } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import './MealsDetailStyle.css';

const MealsDetail = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetail = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        if (response.data.meals && response.data.meals.length > 0) {
          setMeal(response.data.meals[0]);
        } else {
          setError('no meals found.');
        }
      } catch (error) {
        console.error('Erro no MealsDetail:', error);
        setError('Erro ao carregar dados, por favor, tente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetail();
  }, [idMeal]);

  const getIngredients = (meal) =>{
    const Ingredients = []
    for( let i= 1; i <= 20; i++){
      const ingredient = meal[`strIngredient${i}`]
      const measure = meal[`strMeasure${i}`]
      if(ingredient){
        Ingredients.push(`${measure} ${ingredient} `)
      }

    }
    return Ingredients
  }

  if (loading) {
    return <span className='load'><VscLoading/></span>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!meal) {
    return <p>no meals found...</p>;
  }
  const ingredients = getIngredients(meal);

  return (
    <div className="meal-detail">
      
      <div className='container-detail'>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <div className='ingredients-card'>

        <div className='information-meal'>

        <h1>{meal.strMeal}</h1>
        <h2 className='category'>Category: <span>{meal.strCategory}</span></h2>
        <h2 className='region'>Region <span>{meal.strArea}</span></h2>

        <div className='font'>
          <h2>Source: </h2>
          <a href={meal.strSource} target='_blank'>{meal.strSource ? meal.strSource : 'Fonte não encontrada'}</a>
        </div>

        <h2 className='tags'>Tags:   <span>{meal.strTags ? meal.strTags : 'Tags não encontradas' }</span></h2>
        
        </div>
        <div className='container-list'>
        <h1>Igredients</h1>
        <ul className='list-ingredients'>
          {ingredients.map((ingredient, index) =>(
            <li key={index}>{ingredient}</li>
          ))
          }
        </ul>
        </div>
      </div>
      </div>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealsDetail;
