import tvShows from "../config/Database";

const getAllShows = (req, res) => {
    res.json(tvShows);
};

// Get show by year
const getShowById = (req, res) => {
    const year = parseInt(req.params.year);
    const filterShows = tvShows.filter(show => show.year === year);
    res.json(filterShows);
};

// delete Show by title 
const deleteShow = (req, res) => {
    const title = req.params.title;
    const index = tvShows.findIndex(show => show.title === title);
    if (index > -1) {
        tvShows.splice(index, 1);
        res.json(tvShows);
    }
};
