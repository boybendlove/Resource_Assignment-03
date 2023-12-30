import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {saveToStorage,getFromStorage} from '../API/Storage';

function Name(props) {

    const [name, setName] = useState('')

    useEffect(() => {

        const fetchData = async () => {

            const response = getFromStorage('id_user')
            setName(response)
        }

        fetchData()

    }, [])

    return (
        <li className="nav-item dropdown">
            <a 
                className="nav-link dropdown-toggle" 
                style={{ cursor: 'pointer' }}
                id="pagesDropdown"
                data-toggle="dropdown"
                aria-haspopup="true" 
                aria-expanded="false"
                >
                <i className="fas fa-user-alt mr-1 text-gray"></i>
                {name.fullname}
            </a>
         
        </li>
    );
}

export default Name;