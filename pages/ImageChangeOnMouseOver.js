import React from "react"
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1269.jpg" 
                              secondaryImg="/static/speakers/Speaker-1269.jpg" 
                              alt="" />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1725.jpg" 
                              secondaryImg="/static/speakers/Speaker-1725.jpg" 
                              alt="" />
    </div >
  )
}

export default ImageChangeOnMouseOver
