import { useEffect, useState} from 'react';
import { api } from '../utilities';
import Button from 'react-bootstrap/Button';

export default function PhotoPackage() {

    const [Allpackages, setAllPackage] = useState([])
 
    const getPackage = async () => {
        const response = await api.get('/packages/')
        const data = response.data
        setAllPackage(data)
            
        console.log(response.data)

    }
    useEffect(() => {
        getPackage()
    }, [])
    

    return (
        <div>
            <div className="photo-package-info">
                {Allpackages.map((item, index) => (
                    <div className='packName-parent' key={index}>
                        <h4 className='packName'>{item.package_name}</h4>
                        <div>
                            <h5 className='packName-child'>Description</h5>
                            <p>{item.package_info}</p> 
                        </div>
                        <div>
                            <h5 className='packName-child'>Price</h5>
                            <p> $ {item.package_price}</p>
                        </div>
                        <div>
                       <Button>Select</Button>
                        </div>
                    </div>  
                ))}
            </div>
            
        </div>
    );
}