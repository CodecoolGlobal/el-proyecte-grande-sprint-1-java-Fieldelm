const InstructionItem = ({index, text}) => {
    return(
        <div className="instruction-container">
            <p>{index+1}. {text}</p>
        </div>
    )
}

export default InstructionItem;