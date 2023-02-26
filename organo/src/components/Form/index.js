import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css'
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.savedCollaborator({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')

    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                value={name} 
                onChange={value => setName(value)} 
                required={true} 
                label="Nome" 
                placeholder="Digite seu nome" />
                <TextField 
                value={role} 
                onChange={value => setRole(value)} 
                required={true} 
                label="Cargo" 
                placeholder="Digite seu cargo" />
                <TextField 
                value={image} 
                onChange={value => setImage(value)}
                required={true} 
                label="Imagem" 
                placeholder="Informe o endereço da imagem" />
                <DropdownList 
                value={team}
                onChange={value => setTeam(value)}
                required={true} 
                label="Time" 
                items={props.teams}/>
                <Button 
                text="Criar Card" />
            </form>
        </section>
    )
}

export default Form;