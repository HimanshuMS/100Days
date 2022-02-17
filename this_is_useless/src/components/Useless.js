import React, { useState } from "react";
import "../index.css";
import { Typewriter } from "react-simple-typewriter";
import { words } from "../words";

function Useless() {
  let [color, setColor] = useState(false);
  const [word, setWord] = useState(
    words[
      Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
    ]
  );
  // const word = words[Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]]

  return (
    <>
      <div className="min-h-screen bg-gray-900 bg-opacity-75 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="block w-full text-center text-5xl text-gray-50 mb-6 select-none">
            <Typewriter
              words={["Type", "Delete", "Type", "Repeat!"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
        </div>

        <div className="w-full border rounded-sm shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h2
            className={`mt-6 text-center select-none text-3xl ${
              color ? "text-green-500" : "text-gray-50"
            }`}
          >
            {word}
          </h2>
          <div className="py-8">
            <input
              className="shadow appearance-none justify-center text-center border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Type Here"
              onChange={(e) => {
                if (e.target.value === word) {
                  setColor(true);
                  setTimeout(() => {
                    setWord(
                      words[
                        Object.keys(words)[
                          Math.floor(Math.random() * Object.keys(words).length)
                        ]
                      ]
                    );
                    setColor(false);
                  }, 500);
                }

                setTimeout(
                  () => (e.target.value = e.target.value.slice(0, -1)),
                  700
                );
              }}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Useless;
