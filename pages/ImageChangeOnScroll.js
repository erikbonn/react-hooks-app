import React from "react"
import ImageToggleOnScroll from '../src/ImageToggleOnScroll'

const ImageChangeOnScroll = () => {
  return (
    <div>
      <h1>List of Speakers</h1>
      {[1269, 1725, 18805, 5996].map(speakerId => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
            <h3>This is a speaker</h3>
          </div>
        )
      })}
      <h1>This is the bottom of the list</h1>
    </div >
  )
}

export default ImageChangeOnScroll
