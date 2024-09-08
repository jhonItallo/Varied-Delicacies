import './HomeStyle.css'
import SearchMeals from '../components/sectionsApp/SearchMeals'
import Categories from '../components/sectionsApp/Categories'


const Home = () => {
  return (
    <div className='container-home'>
      <SearchMeals />
      <Categories />
    </div>
  )
}

export default Home