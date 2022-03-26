import {languages} from "../../helpers/data"
import Item from "../../components/item/Item"
import "./Card.css"

const Card = () => {
    return (
        <div className = "cards-area-container">
            <div className="bars"></div>
            <h5 className="language-title">Languages</h5>
            <div className="cards-container">
                { languages.map( (item,index) => {
                return (
                    <Item card = {item} key={index}/>
                )
            }

            )}
           </div>
        </div>
    )
}

export default Card;