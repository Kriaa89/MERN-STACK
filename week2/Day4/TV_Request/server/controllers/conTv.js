import tvShows from "../config/Database.js";

const getAllShows = (req, res) => {
    res.json(tvShows);
};

// Get show by year
const getShowById = (req, res) => {
    const year = parseInt(req.params.year);
    const filterShows = tvShows.filter(show => show.yearCreated == year);
    res.json(filterShows);
};

// delete Show by title 
const deleteShow = (req, res) => {
    const title = req.params.title;
    const index = tvShows.findIndex(show => show.tvShow === title);
    if (index !== -1) { // if show is found in the array
        tvShows.splice(index, 1); // remove the show from the array
        res.json(tvShows); 
    } else {
        res.status(404).send("Show not found");
    }
};


// update show cast
const updateShow = (req, res) => {
    const title = req.params.title;
    const show = tvShows.find(show => show.tvShow === title);
    if(show) {
        show.starring = req.body.starring;
        res.json(show);
    } else {
        res.status(404).json("Show not found"); // 
    }
};

export { getAllShows, getShowById, deleteShow, updateShow };