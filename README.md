# Listing Assignment
This repo holds the Listing Assignment for the Backend Development course of CMD.

## What it basically does
This app is a very basic static file server that can only handle some predetermined routes:
* `/` 
* `/index`
* `/about`
* `/img`
* `/404`
* `/nonexistent-file`
* `/images` or `/images/`

## What I wanted it to do
* Make file list at `/images/` clickable and redirect to the file itself
* Dynamically parse the request url so it wouldn't matter if you put the file extension behind it or not (i.e. `/index` & `/index.html`)
* Use better error handling

## Looking back
Exercise was great to bring back some of the basics I missed, but thank the developer gods for Express. 
Doing this manually all the time will be a living nightmare.

