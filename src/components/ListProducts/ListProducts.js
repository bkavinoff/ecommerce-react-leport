import Card from '../Card/Card'
const ListProducts = () =>{
    return(
        <div className="container-cards">
            <Card title={'Remera'} size={'S'} price={'200'}/>
            <Card title={'Campera'} size={'M'} price={'2000'}/>
            <Card title={'Buzo'} size={'L'} price={'500'}/>
            <Card title={'Camisa'} size={'XL'} price={'1500'}/>
        </div>
    )
}

export default ListProducts;