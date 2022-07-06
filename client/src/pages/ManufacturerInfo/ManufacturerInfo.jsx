import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, NavLink } from 'react-router-dom'

const ManufacturerInfo = () => {
    const { id } = useParams()
    const [manufacturer, setManufacturer] = useState({})
    const [products, setProducts] = useState({})

    const getManufacturer = async () => {
        let { data } = await axios.get(`http://localhost:1337/api/manufacturers/${id}`)

        setManufacturer(data)
        setProducts(data.products)
    }

    useEffect(() => {
        getManufacturer()
    }, [])

    console.log(manufacturer)
    console.log(products)

    return (
        <div>
            <div className='title'>Manufacturer Information</div>
            <h3>Name:</h3>
            <span>{manufacturer.name}</span>
            <h4>Country:</h4>
            <span>{manufacturer.country}</span>
            <h3>Products:</h3>
            {
                manufacturer.products.map((product) => {
                    return (
                        <div>
                            <div>{product.name}</div>
                            <h5>Year Introduced:</h5>
                            <span>{product.yearIntroduced}</span>
                        </div>
                    )
                })
            }
            <div>
                <NavLink to='/'>Back to Search</NavLink>
            </div>
        </div>
    )
}

export default ManufacturerInfo