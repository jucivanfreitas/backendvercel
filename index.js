import express from "express";
const app =express()
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

app.get('/', (req, res) => {
  res.send('api funcionando')
})


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
