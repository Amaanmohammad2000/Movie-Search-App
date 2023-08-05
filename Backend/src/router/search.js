const express = require("express");
const router = express.Router();
require("dotenv").config();
const fetch = require("node-fetch");
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjU2MTJkZTE5ODMxYzAwNGVlOGU4ODg2MjhjMzQzNiIsInN1YiI6IjY0Y2NhMzBkZTA0ZDhhM2FhOTcwMmQ5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OGU9HUxoePd92I4yqsoZD4tpkvpzHZHXNi3V3MmVQtQ'
    }
  };
  
router.get("/search", async (req, res)=>{
    try {
        const query = req.query.q
        if(query){
            const response = await fetch(`${process.env.API_SEARCH}&query=${query}`,options)
            const data = await response.json()
            res.status(200).json({status:"Success", data:data});
        }
    } catch (error) {
        res.status(400).json({status:"Error", message: error.message});
    }
})

module.exports = router;