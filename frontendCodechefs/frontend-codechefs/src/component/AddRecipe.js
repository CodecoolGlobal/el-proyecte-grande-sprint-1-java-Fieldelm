import Header from "./Header";
import {useEffect, useRef, useState} from "react";
import InstructionItem from "./InstructionItem";
import {getApi} from "../util/Fetch";
import IngredientDropItem from "./IngredientDropItem";
import IngredientItem from "./IngredientItem";
import UnitDropDownItem from "./UnitDropDownItem";

const AddRecipe = () => {

    const [instruction, setInstruction] = useState([])
    const [ingredients, setIngredients] = useState([]);
    const [Units, setUnits] = useState([])
    const [addedIngredients, setAddedIngredients] = useState([]);


    const instructionRef = useRef(null)
    const valueRef = useRef(null)
    const unitRef = useRef(null)
    const nameRef = useRef(null)


    function addInstruction(e) {
        e.preventDefault()
        const newInstruction = [...instruction]
        newInstruction.push(instructionRef.current.value)
        setInstruction(newInstruction)

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
    const addedInstruction = instruction === undefined ? "" : instruction
        .map(instruction => <InstructionItem text={instruction}></InstructionItem>)

    const addedIngredient = ingredients == undefined ? "" : ingredients
        .map(ingredient => <IngredientItem name={ingredient.name} value={ingredient.value} unit={ingredient.unitType}></IngredientItem>)


    return (
        <div>
            <Header/>
            <div >

                <form action="" className="container">
                    <h1>Add your recipe</h1>

                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" required></input>

                    <label htmlFor="value"></label>
                        <input type="number" min="0" max="100" step="0.01" ref={valueRef}/>

                    {addedIngredient}
                    <label htmlFor="ingredients"></label>
                    <select ref={nameRef}>
                        {ingredientsList}
                    </select>

                    <label htmlFor="units"></label>
                    <select ref={unitRef}>
                        {unitList}
                    </select>
                    <button onClick={addIngredient}>add ingredients</button>


                    {addedInstruction}
                    <input type={"text"} ref={instructionRef}/>
                    <button onClick={addInstruction}>Add instruction</button>


                    <button type="submit" className="btn">Add your recipe</button>
                </form>
            </div>
        </div>
    )
}

export default AddRecipe;