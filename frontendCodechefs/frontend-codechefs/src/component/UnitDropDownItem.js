const UnitDropDownItem = ({list}) => {

     const unitNameList = list === undefined ? "loading...":list.map(unit => <option key={unit} value={unit}>{unit}</option>)
    return(
        unitNameList
    )
}

export default UnitDropDownItem;