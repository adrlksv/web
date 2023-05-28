import {Header} from "../components/header/Header";
import {useContext} from "react";

export const Destroyment = ()=>{

    const {destroyment} = useContext(AsteroidsContext)

    return <div>
        <Header/>
        {destroyment.map(item=><Card key={item.id}{...item}/>)}
    </div>
}