import tvShows from "../config/Database";

const getAllShows = (req, res) => {
    res.json(tvShows);
};

// Get show by year
const getShowById = (req, res) => {
    const year = parseInt(req.params.year);
    const filterShows = tvShows.filter(show => show.year == year);
    res.json(filterShows);
};

// delete Show by title 
const deleteShow = (req, res) => {
    const title = req.params.title;
    const index = tvShows.findIndex(show => show.title == title);
    if (index > -1) { // if show is found in the array
        tvShows.splice(index, 1); // remove the show from the array
        res.json(tvShows); 
    } else {
        res.status(404).send("Show not found");
    }
};


// update show cast
const updateShow = (req, res) => {
    const title = req.params.title;
    const index = tvShows.find(show => show.title == title);
    if(show) {
        show.satarring = req.body.satarring;
        res.json(tvShows);
    }
};