import {useState} from "react";
import {useEffect} from "react";
import {getApi} from "../util/Fetch";
import UnitDropDownItem from "./UnitDropDownItem";

const UnitDropDown = () => {

     const [units, setUnits] = useState([])

    useEffect(() => {
        getApi(`/get-all-units-name`)
            .then(_res => setUnits(_res))
    }, []);

     const unitList = <UnitDropDownItem list={units}></UnitDropDownItem>
    return(
        <>
            <label htmlFor="units"></label>
            <select>
                {unitList}
            </select>
        </>
    )
}

export default UnitDropDown;