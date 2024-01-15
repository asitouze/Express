const express = require('express');
const app = express();

const port = 5000;

// app.get("/", (req, res) => {
//     res.send("Welcome to Express");
//   });
  
//   app
//     .listen(port, () => {
//       console.info(`Server is listening on port ${port}`);
//     })
//     .on("error", (err) => {
//       console.error("Error:", err.message);
//     });

// const handler = (req, res) => {};

// app.get("/search", handler);

// const welcomeName = (req, res) => {
//   res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);




const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
  });

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

  const movie = (req, res) => {
    res.status(200).json(movies);
  }

  app.get("/api/movies", movie)

  const idMovie = (req, res) => {
  const movieId = parseInt(req.params.id);
 const foundMovie = movies.find((movie) => movie.id === movieId);
  if (foundMovie) {
    res.status(200).json(foundMovie)
  }
  else {
res.status(404).send("Not found")
  }
}
  
  app.get("/api/movies/:id", idMovie)
