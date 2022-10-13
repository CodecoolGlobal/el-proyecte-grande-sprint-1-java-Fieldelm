const InstructionItem = ({rowNumber, text}) => {
    return(
        <div className="instruction-container">
            <p>{rowNumber}. {text}</p>
        </div>
    )
}

export default InstructionItem;