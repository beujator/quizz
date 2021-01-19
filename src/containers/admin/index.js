import React, {useEffect, useState} from 'react'
const axios = require('axios');

const Admin = () => {
    const [livres, setLivres] = useState([]);
    const getApiLivres = () => {
        var config = {
            method: 'get',
            url: 'http://quizz.localhost/api/livres',
            headers: { }
        };

        axios(config)
            .then(function (response) {
                setLivres(response.data?.livres);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getApiLivres();
    }, []);

    return (<div>
        <ul>
            {livres.map(livre => {
                return (<li key={livre.title}>{livre.title}</li>)
            })}
        </ul>
    </div>)
}

export default Admin
