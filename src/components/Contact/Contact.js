import React, {useState} from "react"

//mui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

//css
import './Contact.css'

const ContactUs = ()=>{

  
    //const handleClick = (e)=>{
      // console.log("Evento Sintetico: ", e )
      // console.log("Evento Nativo: ", e.nativeEvent )
    //}
    const contact = [
        {
          id: 1,
          value: 'ReportIssue',
          label: 'Informar un problema',
        },
        {
          id: 2,
          value: 'Suggestion',
          label: 'Enviarnos una sugerencia',
        },
        {
          id: 3,
          value: 'Other',
          label: 'Otro motivo',
        },
      ];

      const [contactValue, setcontactValue] = useState(
        {
          contactUsername:'',
          contactEmail:'',
          contactMotive:'ReportIssue',
          contactMessage:''
        }
      )

      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Envio de form")
        console.log(contactValue)
        alert("Envío de formulario")
      }

      const resetForm = (e)=>{
         console.log("Limpieza de form")
         setcontactValue({
          contactUsername:'',
          contactEmail:'',
          contactMotive:'ReportIssue',
          contactMessage:''
        })
      }

      const handleChange = (e)=>{
        let obj = {
          contactUsername:(contactValue.contactUsername!=''?contactValue.contactUsername:''),
          contactEmail:(contactValue.contactEmail!=''?contactValue.contactEmail:''),
          contactMotive:(contactValue.contactMotive!='ReportIssue'?contactValue.contactMotive:'ReportIssue'),
          contactMessage:(contactValue.contactMessage!=''?contactValue.contactMessage:'')
        }

        switch (e.target.name){
          case "contactUsername":{
            obj.contactUsername=e.target.value
            console.log("desde username: ", e.target.value)
            break}
          case "contactEmail":{
            obj.contactEmail=e.target.value
            console.log("desde email", e.target.value)
            break}
          case "contactMotive":{
              obj.contactMotive=e.target.value
              console.log("desde motive", e.target.value)
              break}
          case "contactMessage":{
            obj.contactMessage=e.target.value
            console.log("desde message", e.target.value)
            break}
        }
        
        setcontactValue(
          contactValue => (obj)
        )

        //console.log(obj)
      }

      

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit} 
      >
         
        <TextField onChange={handleChange} value={contactValue.contactUsername} name="contactUsername" id="contactUsername" label="Usuario" variant="outlined" />
        <TextField onChange={handleChange} value={contactValue.contactEmail} name="contactEmail" id="contactEmail" label="Email" variant="outlined" />
        <TextField
          id="contactMotive"
          select
          label="Motivo"
          value={contactValue.contactMotive}
          onChange={handleChange}
          helperText="Seleccione el motivo"
          name="contactMotive"
        >
          {contact.map((option) => (
            <MenuItem id="contactMenuItem" key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="txtMessage" onChange={handleChange} value={contactValue.contactMessage} name="contactMessage" id="contactMessage" label="Mensaje" variant="outlined" multiline maxRows={10} />
        <Container>
          <Button onClick={resetForm} variant="contained" color="success">Limpiar</Button>
          <Button type="submit" variant="contained" color="success">Enviar</Button>
        </Container>
      </Box>
      
        
    )
}
export default ContactUs