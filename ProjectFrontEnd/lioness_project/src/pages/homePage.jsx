import { useEffect, useState } from "react"
import {api} from '../utilities'



export default function HomePage() {

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
      <h1>Home Page</h1>
      <img src={nounIconUrl} alt="noun icon" />
      <h5>Under Construction</h5>
    </div>
  );
}