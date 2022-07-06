import React from 'react'
import {Link} from 'react-router-dom'

const ManufacturerList = (props) => {
    const { filteredManufacturers } = props

    return (
        <ul>
            {
            filteredManufacturers.map((manufacturer) => {
                return (
                    <li>
                        <Link to={`/manufacturers/${manufacturer.id}`}>
                            {manufacturer.name}
                        </Link>
                    </li>
                ) 
            })
            }
        </ul>
    )
}

export default ManufacturerList