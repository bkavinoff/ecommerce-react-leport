import React, {useState} from 'react'

//Componentes:
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const [showCard, setShowCard] = useState(true)

    let dataProduct1 = {
        title: 'Remera',
        size: 'S',
        price: '200'
    }

    let dataProduct2 = {
        title: 'Campera',
        size: 'M',
        price: '2000'
    }

    let dataProduct3 = {
        title: 'Buzo',
        size: 'L',
        price: '500'
    }

    let dataProduct4 = {
        title: 'Camisa',
        size: 'XL',
        price: '1500'
    }
const hideCard = () => {
    setShowCard(!showCard);
}

    return(
        
        <div className="container-cards">
            <h2>{children}</h2>
            
            <Card data={dataProduct2}/>
            <Card data={dataProduct3}/>
            <Card data={dataProduct4}/>
            <button onClick={hideCard}>Ocultar/Mostrar Card</button>
            {(showCard)?<Card data={dataProduct1}/>:""}
            {/* <Card title={'Remera'} size={'S'} price={'200'}/>
            <Card title={'Campera'} size={'M'} price={'2000'}/>
            <Card title={'Buzo'} size={'L'} price={'500'}/>
            <Card title={'Camisa'} size={'XL'} price={'1500'}/> */}
        </div>
    )
}

export default ListProducts;