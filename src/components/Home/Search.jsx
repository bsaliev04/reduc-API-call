import React, {useState} from "react";


export default function CountrySelect({newData}) {
  
  const [search, setSearch] = useState('')
  return (
     <input type="text" className="input" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/> 
  );
}
