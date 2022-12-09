import React from 'react'

const SearchInput = ({search,setSearch}) => {
    
    return (
        <>
            <div className='Search-Input'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type of Search"
                />
            </div>
        </>
    )
}
export default SearchInput;