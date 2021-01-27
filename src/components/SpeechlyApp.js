import React from 'react'
import { useSpeechContext } from '@speechly/react-client';

function SpeechlyApp() {
  const { speechState, segment, toggleRecording } = useSpeechContext();

  return (
    <div>
      <h1>Speechly</h1>
      <div className='status'>{speechState}</div>
      {segment ? (
        <div className='segment'>
          {segment.words.map(w => w.value).join(' ')}

        </div>
      ) : null}
      <div className='mic-button'>
        <button onClick={toggleRecording}>Record</button>
      </div>
    </div>
  )
}

export default SpeechlyApp
