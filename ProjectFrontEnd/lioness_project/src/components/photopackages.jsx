import { useEffect, useState} from 'react';
import { api } from '../utilities';
import Button from 'react-bootstrap/Button';


export default function PhotoPackage() {

    // const [Allpackages, setAllPackage] = useState([])
    const [package1, setPackage1] = useState([])
    const [package2, setPackage2] = useState([])
    const [package3, setPackage3] = useState([])
    const [selectedPackage, setSelectedPackage] = useState([])
    
 
    const getPackage = async () => {
        const response = await api.get('/packages/')
        const data = response.data
        setPackage1(data[0])
        setPackage2(data[1])
        setPackage3(data[2])
        // setAllPackage(data)

        // console.log(data[0])
        // console.log(data[1])
        // console.log(data[2])   
        // console.log(response.data)

    }
    useEffect(() => {
      
        getPackage()
    }, [])
    
    const selectPackage = async (event, num) => {
     console.log(num)
        const response = await api.get(`/packages/${num}/`)
        setSelectedPackage(response.data)
        return response.data
        // console.log(response.data)
    }
    useEffect(() => {
        console.log(selectedPackage)
    }, [selectedPackage])

    return (
        <div>
            <div className="photo-package-info">
                <div className="photo-package">
                    <h4>{package1.package_name}</h4>
                    <h5>Description</h5>
                    <p>{package1.package_info}</p>
                    <h5>Price</h5>
                    <p> $ {package1.package_price}</p>
                    <Button onClick={(event)=> selectPackage(event, 1) }>Select</Button>
                </div>
                <div className="photo-package">
                    <h4>{package2.package_name}</h4>
                    <h5>Description</h5>
                    <p>{package2.package_info}</p>
                    <h5>Price</h5>
                    <p> $ {package2.package_price}</p>
                    <Button onClick={(event)=> selectPackage(event, 2) }>Select</Button>
                </div>
                <div className="photo-package">
                    <h4>{package3.package_name}</h4>
                    <h5>Description</h5>
                    <p>{package3.package_info}</p>
                    <h5>Price</h5>
                    <p> $ {package3.package_price}</p>
                    <Button onClick={(event)=> selectPackage(event, 3) }>Select</Button>
                </div>
            </div>
            
        </div>
    );
}