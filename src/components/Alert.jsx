import React from 'react'

function Alert(props) {

    const capitalize = (word) =>{
        if( word === "danger") word = "error";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <>

      {props.alert && <div className='flex justify-center align-middle z-40 bg-deep-blue fixed top-20 w-full h-10'>
          <div className="text-justify text-xl" role="alert">
           <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
          </div>
          </div>}
    
    </>
  )
}

export default Alert