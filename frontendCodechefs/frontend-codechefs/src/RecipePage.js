import { useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "./Header";

const RecipePage = () => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState();

    useEffect(()=>{
        
    })

    return(
        <div>
            <Header/>

        </div>
    )
}

export default RecipePage