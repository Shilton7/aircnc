import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './profile.css'

export default function Profile() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/profile/spots', {
                headers: {user_id }
            })
            setSpots(response.data)
        }
        loadSpots();
    }, []);

    return <>
    <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
                    <strong> {spot.company}</strong>
                    <span> {spot.prince ? `R$ ${spot.prince}/dia` : 'Gratuito' } </span>
                </li>
            ))}
    </ul>

        <Link to="/spot/new">
            <button className="btn">Cadastrar Novo Spot</button>
        </Link>
        </>
}
