const express=require("express");
const server = express();
server.use(express.json());
server.get("/", (req, res) => {
    const songs = [{id:1, name: "Me, Myself, and I"}];
    res.status(200).json(songs);
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));