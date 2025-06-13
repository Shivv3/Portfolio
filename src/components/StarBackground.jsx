import React, { useEffect, useState } from "react";

//A star would be an object which have the following properties: id, size, x, y, opacity, animationDuration
//A meteor would also be an object which have the following properties: id, size, x, y, delay, animationDuration

//A component representing a star background effect:
export const StarBackground = () => {
  //Creating a state which is An array of star objects:
  const [stars, setStars] = useState([]);

  //Creating a state which is An array of meteor objects:
  const [meteors, setMeteors] = useState([]);

  //Creating a useEffect hook to generate stars when the component renders:
  useEffect(() => {
    //Calling the generateStars function to create stars:
    generateStars();

    //Calling the generateMeteors function to create meteors:
    generateMeteors();

    //A function to handle window resize event:
    const handleResize = () => {

      //Regenerate stars on window resize:
      generateStars();
    };

    //Adding the resize event listener to the window:
    window.addEventListener("resize", handleResize);

    //Cleanup function to remove the event listener when the component unmounts:
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  //A function to generate stars:
  const generateStars = () => {
    // Number of stars to generate: Deciding the density of stars based on the screen/window size.
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    //Creating a new list of stars:
    const newStars = [];

    //Looping through the number of stars to generate:
    for (let i = 0; i < numberOfStars; i++) {
      //For each star, we create an object with random properties and push it to the newStars array:
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1 and 4 (px)
        x: Math.random() * 100, // Random x position in percentage - Placing the star anywhere in the viewport between [0-100%]
        y: Math.random() * 100, // Random y position in percentage - Placing the star anywhere in the viewport between [0-100%]
        opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
      });
    }

    //Updating the state with the new stars:
    setStars(newStars);
  };

  //A function to generate Meteors:
  const generateMeteors = () => {
    // Number of meteor to generate: Deciding the density of meteors based on the screen/window size.
    const numberOfMeteors = 5;

    //Creating a new list of Meteors:
    const newMeteors = [];

    //Looping through the number of Meteors to generate:
    for (let i = 0; i < numberOfMeteors; i++) {
      //For each meteor, we create an object with random properties and push it to the newMeteors array:
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // Random size between 1 and 3 (px)
        x: Math.random() * 100, // Random x position in percentage - Placing the star anywhere in the viewport between [0-100%]
        y: Math.random() * 100, // Random y position in percentage - Placing the star anywhere in the viewport between [0-20%]
        delay: Math.random() * 15, // Random delay between 0 and 15 seconds.
        animationDuration: Math.random() * 3 + 3, // Random duration between 3 and 6 seconds
      });
    }

    //Updating the state with the new meteors:
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Looping through the stars state: */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Looping through the meteors state: */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size*20 + "px",
            height: meteor.size + "px",
            left: meteor.x/2 + "%",
            top: meteor.y/2 + "%",
            delay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
