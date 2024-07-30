import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function useUserProfile() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({});
    const { userid } = useParams();

    useEffect(() => {
        axios.get(`https://dummyapi.io/data/v1/user/${userid}`, {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((response) => {
            setUser({...response.data})
            console.log(response);
            setLoading(false);
        })
    },[])

    return [user, loading];
}