import Header from "./Header";
import {useEffect, useRef, useState} from "react";
import InstructionItem from "./InstructionItem";
import {getApi, postFetch} from "../util/Fetch";
import IngredientDropItem from "./IngredientDropItem";
import IngredientItem from "./IngredientItem";
import UnitDropDownItem from "./UnitDropDownItem";

const AddRecipe = () => {

    const [instructions, setInstructions] = useState([])
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState();
    const [image, setImage] = useState();


    //save recipe
    const addRecipe = (e) =>{
        e.preventDefault()

        postFetch("/add-recipe", {name, ingredients, instructions}).then(r => console.log("add recipe"))
    }


    const instructionRef = useRef(null)
    const valueRef = useRef(null)
    const unitRef = useRef(null)
    const nameRef = useRef(null)

    const [defaultUnits, setDefaultUnits] = useState([])
    const [defaultIngredients, setDefaultIngredients] = useState([]);

    // set ingredient, instruction, name
    function addInstruction(e) {
        e.preventDefault()
        const newInstructions = [...instructions]
        const newInstruction = {}
        newInstruction.text = instructionRef.current.value
        console.log(newInstruction)
        newInstructions.push(newInstruction)
        console.log(newInstructions)
        setInstructions(newInstructions)
    }

    function addIngredient(e){
        e.preventDefault()
        const newIngredients = [...ingredients]
        const newIngredient = {}
        newIngredient.name = nameRef.current.value
        newIngredient.value = valueRef.current.value
        newIngredient.unitType = unitRef.current.value
        newIngredients.push(newIngredient)
        setIngredients(newIngredients)
    }

    const handleRecipeNameChange = (event) => {
        setName(event.target.value)
    }

    function addImage(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            const newImage = reader.result

            setImage(newImage);
        }
    }

    //dropdown data
    useEffect(() => {
        getApi(`/get-all-ingredients-name`)
            .then(_res => setDefaultIngredients(_res))
    }, []);

    useEffect(() => {
        getApi(`/get-all-units-name`)
            .then(_res => setDefaultUnits(_res))
    }, []);

    const ingredientsList = <IngredientDropItem list={defaultIngredients}></IngredientDropItem>
    const unitList = <UnitDropDownItem list={defaultUnits}></UnitDropDownItem>


    // print added instruction, ingredient
    const addedInstructions = instructions === undefined ? "" : instructions
        .map((instruction, index) => <InstructionItem key={index} rowNumber={index+1} text={instruction.text}></InstructionItem>)

    const addedIngredients = ingredients === undefined ? "" : ingredients
        .map((ingredient, index )=> <IngredientItem key={index} rowNumber={index+1} name={ingredient.name}
                                                    value={ingredient.value} unit={ingredient.unitType}></IngredientItem>)


    return (
        <div>
            <Header/>
            <div className="add-recipe-form-container">

                <h1>Add your recipe</h1>

                <div className="recipe-name-container">
                    <label htmlFor="name"><b>Name</b></label>

                    <input id="recipe-name" type="text" placeholder="Enter Name" name="name" required onChange={handleRecipeNameChange}></input>
                </div>

                <div className="image-input-container">
                    <img className="recipe-image" src={image}></img>
                    <input id="add-recipe-img" type="file" accept="image/*" onChange={addImage}/>
                </div>

                <div className="added-ingredients-full-container">
                    <div className="ingredients-label-container">
                        <h2>Ingredients :</h2>
                    </div>

                    <div className="added-ingredients-container">
                        {addedIngredients}
                    </div>

                    <div className="ingredients-input-container">
                        <label htmlFor="value"></label>
                        <input id= "ingredient-input" type="number" min="0" max="100" step="0.01" ref={valueRef}/>

                        <label htmlFor="units"></label>
                        <select id="unit-list" ref={unitRef}>
                            {unitList}
                        </select>

                        <label htmlFor="ingredients"></label>
                        <select id="ingredient-list" ref={nameRef}>
                            {ingredientsList}
                        </select>

                        <button id="add-ingredient" onClick={addIngredient}>add ingredients</button>
                    </div>
                </div>

                <div className="add-instructions-full-container">

                    <div className="instructions-label-container">
                        <h2>Instructions :</h2>
                    </div>
                    <div className="added-instructions-container">
                        {addedInstructions}
                    </div>

                    <div className="instruction-input-container">
                        <input id="instruction" type={"text"} ref={instructionRef}/>
                        <button id="add-instruction" onClick={addInstruction}>Add instruction</button>
                    </div>
                </div>

                <button id="add-recipe" className="btn" onClick={addRecipe}>Add your recipe</button>


            </div>
        </div>
    )
}

export default AddRecipe;