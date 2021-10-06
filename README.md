# Spooky Amusement

Welcome to Spooky Amusement! With this application you can find information on any one of our Spooky Amusement parks!
After browsing, feel free to add your own custom amusement park with your own unique attractions!

# Installation

Clone this repository by entering
```bash
git clone git@github.com:Ernesto002/spooky-amusement-frontend.git
```
into your terminal

Then clone the back-end portion of the app by entering 
```bash
git@github.com:Ernesto002/spooky-amusement-backend.git
```
into your terminal

# Usage

Once you've cloned both repositories, head into the back-end directory then enter
```bash
rake db:migrate
rake db:seed
```
into your terminal to seed the database

Then run
```bash
rails s
```
into your terminal to start running the API in order for the app to function.

Then head into the front-end directory and run
```bash
explorer.exe index.html
```
into your terminal for windows

OR

```bash
open index.html
```
into your terminal for mac in order to use the app.

# Back-end repository

The back-end repository for this app can be found [here](https://github.com/Ernesto002/spooky-amusement-backend).
