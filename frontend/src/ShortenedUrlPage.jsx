import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ShortenedUrlPage() {
    const { url } = useParams();

    // redirect user to backend url/slug
    useEffect(() => {
        if(url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
        }
    },[url]);
  return null;
}

export default ShortenedUrlPage