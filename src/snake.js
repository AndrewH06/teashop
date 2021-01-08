import React, { useState, useRef, useEffect } from "react";
import { SnakeInterval } from "./snake-intervals";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./snake-constants";
import "./snake.css";

const Snake = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(SNAKE_START); //set coordinates for snake
  const [apple, setApple] = useState(APPLE_START); //set coordinate for apple
  const [dir, setDir] = useState([0, -1]); //set direction
  const [speed, setSpeed] = useState(null); //set the speed of the snake
  const [gameOver, setGameover] = useState(false);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameover(false);
  };

  const endGame = () => {
    setSpeed(null);
    setGameover(true);
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]); //take in user KeyDown

  const createApple = () =>
    apple.map((_, i) => Math.floor((Math.random() * CANVAS_SIZE[i]) / SCALE)); //creating random apple

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] || //check x coordinate of collision based on canvas size
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] || //check y coordinate of collision based on canvas size
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      //loop through all snake segments
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true; //check if snake head runs into segment
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      //check if snake head x & y coordinates are equal to apples
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        //check if apple is inside snake and loop until it doenst
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake)); //creates copy of snake to not mutate original
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]]; //goes to head and moves based on x/y direction
    snakeCopy.unshift(newSnakeHead); //moves the new head into the array
    if (checkCollision(newSnakeHead)) endGame(); //ending the game if collision is true
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop(); //remove last element if not eating apple
    setSnake(snakeCopy); //update snake state with copy
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0); //sets scale of the "Pixels"
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    context.fillStyle = "lightgreen"; //sets snake color
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1)); //loop to render snake
    context.fillStyle = "red"; //sets apple color
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  SnakeInterval(() => gameLoop(), speed);

  return (
    <div
      className="snakeGame"
      role="button"
      tabIndex="0"
      onKeyDown={(e) => moveSnake(e)}
    >
      <h1>Snake Game!</h1>
      <canvas
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div className="gameover">Game Over!</div>}
      <div className="start">
        <button onClick={startGame}>Start</button>
      </div>
    </div>
  );
};

export default Snake;
