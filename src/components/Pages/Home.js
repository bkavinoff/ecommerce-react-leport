//MUI:
import Container from '@mui/material/Container'

//componentes
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const HomePage = () => {
    return (
        <Container>
          <ItemListContainer category='undefined'/>
        </Container> 
    )
}

export default HomePage