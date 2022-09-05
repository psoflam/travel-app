import React from "react";
import { useState } from "react";
import "./bookcard.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function BookCard() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departure, setDeparture] = useState("");
  const [returning, setReturning] = useState("");

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
    const locationFinal = event.target.value;
    return locationFinal;
  };

  const handleChangeDestination = (event) => {
    setDestination(event.target.value);
    const destinationFinal = event.target.value;
    return destinationFinal;
  };
  const handleChangeDeparture = (event) => {
    setDeparture(event.target.value);
    const departureFinal = event.target.value;
    return departureFinal;
  };

  const handleChangeReturning = (event) => {
    setReturning(event.target.value);
    const returningFinal = event.target.value;
    return returningFinal;
  };

  return (
    <div id="bookcard">
      <div className="form" id="frm1">
        <h3>Book your next trip with us!</h3>
        <Stack component="form" noValidate spacing={3}>
          <div>
            <TextField
              id="flight--Where"
              label="From where?"
              variant="standard"
              value={location}
              onChange={handleChangeLocation}
            />
            <TextField
              id="flight--to"
              label="To where?"
              variant="standard"
              value={destination}
              onChange={handleChangeDestination}
            />
            <br />
          </div>
          <TextField
            id="date"
            label="Departure"
            type="date"
            placeholder="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={departure}
            onChange={handleChangeDeparture}
          />
          <TextField
            id="datet"
            label="Returning"
            type="date"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={returning}
            onChange={handleChangeReturning}
          />
        </Stack>
        <Button className="book__button" variant="contained">
          <a target="" href="https://www.expedia.com/">
            Book Now!
          </a>
        </Button>
      </div>

      <img
        className="bookcard--img"
        src="..\Assets\Images\pexels-element-digital-1051073.jpg"
        alt=""
      />
    </div>
  );
}
