import React from 'react';

function Search({ location, setLocation, searchLocation }) {
  return (
    <div className="text-center py-4">
      <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
        className="p-2 text-lg rounded-full border border-white/80 bg-white/10 text-white placeholder-white focus:outline-none"
      />
    </div>
  );
}

export default Search;