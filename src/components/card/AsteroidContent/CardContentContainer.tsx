import {AsteroidCard} from "../Card";
import React, {useContext} from "react";
import {AsteroidsContext} from "../../asteroids-context/AsteroidsContext";
import {AsteroidContent} from "./AsteroidContent";
export const CardContainer = (props)=>{
    const {distanceMode} = useContext(AsteroidsContext)
    return <AsteroidContent {...props} distanceMode={distanceMode}/>
}
