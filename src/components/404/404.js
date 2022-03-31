import React from "react"
import {Link} from 'react-router-dom'

//MUI
import Button from '@mui/material/Button';

//css
import './404.css';

const Page404 = () => {

    return(
        <section className="notfound-container row">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Página no encontrada</h2>
                <p>La página que estás buscando se ha ido a pasear al ciberespacio y no podemos encontrarla... <br/> ¡pero no te preocupes!, podemos volver al sitio a ver páginas que no nos abandonaron:</p>

                <Link className='btnBack404' to='/'><Button variant="contained" color="success">Volver al inicio</Button></Link>
            </div>
        </section>
        )
}

export default Page404