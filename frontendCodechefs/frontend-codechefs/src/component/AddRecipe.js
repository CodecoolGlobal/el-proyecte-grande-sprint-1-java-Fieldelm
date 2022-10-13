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
    const [name, setName] = useState()


    //save recipe
    const addRecipe = (e) =>{
        e.preventDefault()

        postFetch("/add-recipe", {name, ingredients, instructions}).then(r => console.log("add recipe"))
    }


    const instructionRef = useRef(null)
    const valueRef = useRef(null)
    const unitRef = useRef(null)
    const nameRef = useRef(null)

    const [Units, setUnits] = useState([])
    const [addedIngredients, setAddedIngredients] = useState([]);

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

    //dropdown data
    useEffect(() => {
        getApi(`/get-all-ingredients-name`)
            .then(_res => setAddedIngredients(_res))
    }, []);

    useEffect(() => {
        getApi(`/get-all-units-name`)
            .then(_res => setUnits(_res))
    }, []);

    const ingredientsList = <IngredientDropItem list={addedIngredients}></IngredientDropItem>
    const unitList = <UnitDropDownItem list={Units}></UnitDropDownItem>


    // print added instruction, ingredient
    const addedInstruction = instructions === undefined ? "" : instructions
        .map(instruction => <InstructionItem text={instruction.text}></InstructionItem>)

    const addedIngredient = ingredients === undefined ? "" : ingredients
        .map(ingredient => <IngredientItem name={ingredient.name} value={ingredient.value} unit={ingredient.unitType}></IngredientItem>)


    return (
        <div>
            <Header/>
            <div >


                    <h1>Add your recipe</h1>

                    <label htmlFor="name"><b>Name</b></label>
                    <input id="recipe-name" type="text" placeholder="Enter Name" name="name" required onChange={handleRecipeNameChange}></input>

                    <label htmlFor="value"></label>
                        <input id="recipe-value" type="number" min="0" max="100" step="0.01" ref={valueRef}/>

                    {addedIngredient}
                    <label htmlFor="ingredients"></label>
                    <select ref={nameRef} id="ingredient-list" >
                        {ingredientsList}
                    </select>

                    <label htmlFor="units"></label>
                    <select ref={unitRef} id="unit-list" >
                        {unitList}
                    </select>
                    <button id="add-ingredient" onClick={addIngredient} >add ingredients</button>


                    {addedInstruction}
                    <input id="instruction" type={"text"} ref={instructionRef}/>
                    <button id="add-instruction" onClick={addInstruction}>Add instruction</button>


                    <button id="add-recipe" className="btn" onClick={addRecipe}>Add your recipe</button>

            </div>
        </div>
    )
}

export default AddRecipe;