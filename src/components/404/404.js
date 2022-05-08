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
                <h2>No hemos podido encontrar el artículo solicitado</h2>
                <p>El artículo que estás buscando se ha ido a pasear al ciberespacio y no podemos encontrarlo... <br/> ¡Pero no te preocupes!, podemos volver al sitio a ver otros artículos geniales que tenemos en stock:</p>

                <Link className='btnBack404' to='/'><Button variant="contained" color="success">Volver al inicio</Button></Link>
            </div>
        </section>
        )
}

export default Page404