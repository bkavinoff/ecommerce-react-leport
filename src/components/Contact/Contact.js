import React, {useState} from "react"

//mui
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

//css
import './Contact.css'

const ContactUs = ()=>{

    const contact = [
        {
          value: 'ReportIssue',
          label: 'Informar un problema',
        },
        {
          value: 'Suggestion',
          label: 'Enviarnos una sugerencia',
        },
        {
          value: 'Other',
          label: 'Otro motivo',
        },
      ];

      const [motivo, setMotivo] = useState('ReportIssue');

      const handleChange = (event) => {
        setMotivo(event.target.value);
      };

    return(
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
          
        <TextField id="outlined-required" label="Usuario" variant="outlined" />
        <TextField id="outlined-required" label="Email" variant="outlined" />
        <TextField
          id="outlined-select-motivo"
          select
          label="Motivo"
          value={motivo}
          onChange={handleChange}
          helperText="Seleccione el motivo"
        >
          {contact.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField className="txtMensaje" id="outlined-multiline-static" label="Mensaje" variant="outlined" multiline maxRows={10} />
        <Button variant="contained" color="success">Enviar</Button>
      </Box>
      
        
    )
}
export default ContactUs