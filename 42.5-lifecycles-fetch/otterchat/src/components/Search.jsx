import React from 'react';

const Search = (props) => {

  const handleChange = (evt) => {
    props.updateSearchTerm(evt.target.value)
  }

  return(
    <div className="search-box">
    	<input
        type="text"
        name="search"
        placeholder="Search..."
        value={props.search}
        onChange={handleChange} />
    </div>
  )

};

export default Search;
