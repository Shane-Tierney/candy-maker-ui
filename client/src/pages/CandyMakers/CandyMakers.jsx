import React, { useState, useEffect } from 'react'
import ManufacturerList from '../../components/ManufacturerList/ManufacturerList'
import Search from '../../components/Search/Search'
import axios from 'axios'

const CandyMakers = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [manufacturersArray, setManufacturersArray] = useState([])
    const [filteredManufacturers, setFilteredManufacturers] = useState([])
    

    useEffect(() => {
        fetchManufacturers()
    }, [])

    useEffect(() => {
        let newFilteredManufacturers = manufacturersArray.filter(manufacturer => manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredManufacturers(newFilteredManufacturers)
      }, [searchTerm, manufacturersArray])

    const fetchManufacturers = async () => {
        let fetchedData = await axios.get('http://localhost:1337/api/manufacturers')
        setManufacturersArray(fetchedData.data)
    }

    return (
        <div>
            <div className='title'>
                <h1>Candy Maker</h1>
            </div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <ManufacturerList filteredManufacturers={filteredManufacturers}/>
        </div>
    )
}

export default CandyMakers