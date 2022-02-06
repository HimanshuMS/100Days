import React from 'react';
import '../index.css';

function Useless() {
  return (
    <>
      <h1>Useless</h1>
      <div className="useless">
        <table>
          <thead>
            <tr>
              <td>...</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <input type="text" placeholder='type here' onChange={(e) => {
                  var i = e.target.value.length
                  while(i > 0) {
                    setTimeout(() => {e.target.value = e.target.value.slice(0, -1)}, 500)
                    i--
                  }
                }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Useless;
