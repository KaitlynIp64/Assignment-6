// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: May 2022
// This file contains xxx
"use strict"
/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-6", {
    scope: "/Assignment-6/",
  });
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.results[0].url)
    document.getElementById("api-image").innerHTML =
    '<img src="' + 
      jsonData.results[0].url + 
      '" alt="API image" class="center" width="40%" ' +
      '>'
    if (jsonData.artist_url != "none") {
      document.getElementById("artist-name").innerHTML =
      "<p>Artist: " +
      '<a href="' +
      jsonData.artist_url +
      '">' +
      jsonData.artist +
      "</a>"
  } else {
    document.getElementById("artist-name").innerHTML = "<p>Artist: unknown</p>"
  }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://nekos.best/api/v2/neko")