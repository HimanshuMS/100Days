import React from 'react';

function Useless() {
  return (
    <>
      <h1>Useless</h1>
      <div>
        <input type="text" id='useless' placeholder='type here' onChange={(e) => {
          var i = e.target.value.length
          while(i > 0) {
            setTimeout(() => {e.target.value = e.target.value.slice(0, -1)}, 1000)
            i--
          }
        } } />
      </div>
    </>
  );
}

export default Useless;
