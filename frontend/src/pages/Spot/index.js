import React, { useState, useMemo } from 'react'
import api from '../../services/api'
import camera from '../../assets/camera.svg'
import './spot.css'

export default function Spot({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [company,  setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [prince, setprince] = useState('');

    //preview img
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]
    ) 

    async function handleSubmit(event){
        event.preventDefault();
        
        //usado para envio no formato de anexo multipart
        const data = new FormData();
        const user_id = localStorage.getItem('user');
        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('prince', prince);

        await api.post('/spots', data ,{
            headers: { user_id }
        });

        history.push('/profile');
    }

    return (
    <form onSubmit={handleSubmit}>

            <label id="thumbnail" 
                   style={{ backgroundImage: `url(${preview})` }}
                   className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="upload"/>
            </label>

        <label htmlFor="company">Empresa *</label>
        <input
            id="company"
            placeholder="Sua empresa"
            value={company}
            onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Tecnologias * <span>(separas por virgula)</span></label>
            <input
                id="techs"
                placeholder="Quais Tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="prince">Valor da diária * <span>em branco para Gratuito</span></label>
            <input
                id="prince"
                placeholder="Informe o valor"
                value={prince}
                onChange={event => setprince(event.target.value)}
            />

            <button className="btn"> Salvar</button>

    </form>

    )
}