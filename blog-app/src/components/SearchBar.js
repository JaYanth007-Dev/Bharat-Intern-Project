import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex justify-center p-3 bg-black'>
            <input type="text" className='border-2 border-red-600 font-bold text-amber-900 rounded-l-lg p-2 pr-10' placeholder="Search the title..." />
            <button className='border border-red-600 rounded-r-lg pr-4 pl-2 bg-green-600 font-bold'>Search</button>

        </div>
    )
};


export default SearchBar;