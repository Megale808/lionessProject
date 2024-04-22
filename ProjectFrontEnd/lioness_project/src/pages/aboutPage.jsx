import React, { useEffect, useState } from 'react';
import { api } from '../utilities';


export default function About() {
  const [nounIconUrl, setNounIconUrl] = useState('');

  useEffect(() => {
    const fetchNounIcon = async () => {
     const response = await api.get(`noun/${"construction"}`);
      if (response.status === 200) {
        console.log(response.data);
        setNounIconUrl(response.data);
      }
    };


    fetchNounIcon();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <img src={nounIconUrl} alt="noun icon" />
      <h5> YOU GUESSED IT ...... Also Under Construction</h5>
    </div>
  );
  }