

//componentes
import ItemListContainer from '../ItemListContainer/ItemListContainer'
//Componentes
import CarouselComponent from '../Carousel/Carousel'

const HomePage = () => {
    return (
        <>
            <CarouselComponent />
            <ItemListContainer category='undefined'/>
        </>
    )
}

export default HomePage