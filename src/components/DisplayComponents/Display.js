import React, {useState} from "react";
import Numbers from '../../components/ButtonComponents/NumberButtons/Numbers'




const Display = (props) => {
  const [numdisplay  , setNumDisplay] = useState (0);
  return <div className="display">{
    <span>{numdisplay}</span>/* Display any props data here */}</div>;
};
export default Display