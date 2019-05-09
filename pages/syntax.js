import React, {useEffect} from "react"

const Syntax = () => {

  const [checkBoxValue, setCheckBoxValue] = useSetState(false)

  useEffect(() => {
    console.log('in useEffect');
    return () => {
      console.log('in useEffect Cleanup');
    }
  }, [checkBoxValue]) // if you want useEffect to be called again after un-mounting, you need to have all the values in this array that need to change. 
        // like the true or false value of a checkbox field on the screen. 
  return (
    <div></div>
  )

}

export default Syntax
