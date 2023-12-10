import { useState } from "react";
import Macdo from "./images.jpg";
import Kebab from "./kebab.jpg";
import KFC from "./kfc.jpeg";
import Sandwich from "./sandwich.jpg";

function BurgerBlock({ imagePath, restaurantName, burgerName, price }) {

    const [qte, setQte] = useState(0);

    const incrementQte = () => {
        setQte(qte + 1);
    }

    return (
        <div className='shops--block'>
            <img className='menu' src={imagePath} alt={restaurantName} />
            <a href='#'>{restaurantName}</a>
            <p className='block__desc'>{burgerName}</p>
            <p className='block__prix'>{price}</p>
            <button className='quantite' onClick={incrementQte}>
                {qte}
            </button>
        </div>
    );
}

function Component() {
    return (
<div className="cln">
    <div className="cln1"></div>
    <div className="cln2">

        <div className="cln2t">

        <div className='shopsblocks'>

<BurgerBlock
    imagePath={Macdo}
    burgerName='Menu MacDo™'
    price='12,50 €'
     
/>
<BurgerBlock
    imagePath={Kebab}
    burgerName='Kebab™'
    price='8,50 €'
  
/>

    <BurgerBlock
        imagePath={KFC}
        burgerName='KFC™'
        price='10,00 €'
        
    />

    <BurgerBlock
        imagePath={Sandwich}
        burgerName='Sandwich™'
        price='3,50 €'
    
    />

</div>
        </div>
    </div>
  </div>
    );
    
  }
  export default Component;
  