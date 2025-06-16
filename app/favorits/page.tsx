import { fetchFavorits } from "@/actions/actions"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritsPage = async() => {

  const favorites = await fetchFavorits()
  // console.log(favorites)
  return (
    <LandmarkList landmarks={favorites}/> 
  )
}
export default FavoritsPage