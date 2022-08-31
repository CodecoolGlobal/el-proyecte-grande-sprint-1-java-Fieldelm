import {useParams} from "react-router-dom";
import Header from "./Header";

const RecipePage = () => {

    const {recipeId} = useParams()

    return(
        <div>
            <Header/>
        </div>
    )
}

export default RecipePage