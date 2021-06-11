import React from 'react';

const Loading = ({ loading }) => {
  return (
    <div>
      {
        loading ?
        <div>
          <h1>LOADING ...</h1>
        </div>
        :
        null
      }
    </div>
  )
}

export default Loading;