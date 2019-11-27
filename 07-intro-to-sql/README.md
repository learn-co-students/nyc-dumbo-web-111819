Intro to SQL
===

## SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables

## Outline
* 15 mins: discussion of databases and SQL
* 30 mins: look at a SQL database and write some SQL

## Key Questions
* What can I do with data?
  - store data
  - update
  - keep a record of something, do analysis
  - visualization
  - ask questions

* Why is persistence important? How have we been persisting data so far?
- how the data remains, if it sticks around after the process ends
- @@all << self, []
- if other people want to use that data, it needs to exists somewhere outside of memory
- less efficient

* What is a (relational) database?
- spreadsheet
- has multiple tables (spreadsheets), and a way to connect between them
  - join class
  - Passenger -< Ticket >- Destination
    - Ticket: passenger, destination
    - passenger.id, ticket.passenger_id

* What kinds of databases are there?
- Relational Database -> SQL Database -> SQLite, Postgres, Oracle, MSSQL Server
- NoSQL -> Mongo (document), Redis (key-value store, cache), GraphQL

* What is SQL?
- Structured Query Language -> lets us ask questions about our database, and make requests
  - Declarative Language 

* What is CRUD?
- Create
- Read
- Update
- Delete

* How does an app like Instagram use CRUD?
- Create -> create a profile, create a post, make a comment/like
- Read -> look at someone's profile, look at someone's feed
- Update -> update your bio, change your photo profile, change your username?
- Delete -> delete a post, delete a comment?

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game.sqlite` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the games table
```sql
SELECT games.id, games.genre
FROM games;
```

2. Write the SQL to select the game with the title "Super Mario Bros. 2"
```sql
SELECT *
FROM games
WHERE games.title = 'Super Mario Bros. 2';
```

  2a. Change the query to include all games with the word 'Mario' in their name

3. Write the SQL to display an game's name next to their review ratings
```sql
SELECT games.title, reviews.rating
FROM games
JOIN reviews ON reviews.game_id = games.id;
```

 3a. Write the SQL to show the game title, the review rating, and the player's name

 ```sql
SELECT games.title, reviews.rating, players.name
FROM games
JOIN reviews ON reviews.game_id = games.id
JOIN players ON reviews.player_id = players.id;
 ```

4. Write the SQL to add a review to a game for a player
