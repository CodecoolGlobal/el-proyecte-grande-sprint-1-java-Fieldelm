import {useRef, useState} from "react";
import InstructionItem from "./InstructionItem";

const Instruction = () => {

     const [instructions, setInstruction] = useState([])

    const inputRef = useRef(null)

    function clickHandle(){
         const newInstruction = [...instructions]
         newInstruction.push(inputRef.current.value)
         setInstruction(newInstruction)
    }

    const addedInstruction = instructions === undefined ? "": instructions.map(instruction => <InstructionItem text={instruction}></InstructionItem>)
    return(
        <>
            {addedInstruction}
            <input type={"text"} ref={inputRef}/>
            <button onClick={clickHandle}>Add instruction</button>
        </>
    )
}

export default Instruction;