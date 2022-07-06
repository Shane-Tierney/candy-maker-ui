import React from 'react'

const Search = (props) => {
    const { searchTerm, setSearchTerm } = props

    return (
        <>
            <div className='searchBox'>
                <input type='text' name='searchTerm' value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}}/>
            </div>
        </>
    )
}

export default Search