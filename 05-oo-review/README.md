# Object Relations Code Challenge

Passenger -< Ticket >- Destination

Passenger
- name
- age
- seat_preference

Ticket
- seat_location (window/aisle)
- section (first class/economy)
- ticket_number
- passenger
- destination

Destination
- city
- climate


Welcome to Silicon Valley! For this assignment, our domain is the startup world! We have three models - `Passenger`, `Ticket`, and `Destination`. A `Passenger` has many `Destination`s through `Ticket`s.

If you are not sketching out your domain, and thinking about single source of truth,
you are doing it wrong :(

## Topics

- Classes vs Instances
- Variable Scope ( Class, Instance, Local )
- Object Relationships
- Arrays and Array Methods
- Class Methods

## Notes

Your goal is to build out all of the methods listed in the deliverables. Do your best to follow Ruby best practices. For example, use higher-level array methods such as `map`, `select`, and `find` when appropriate in place of `each`

We've provided you with a console that you can use to test your code. To enter a console session, run `ruby tools/console.rb` from the command line. You'll be able to test out the methods that you write here. Take a look at that file to see how you can pre-define variables and create object instances, rather than manually doing it in every single console session.

**Remember!** This is a code challenge without tests. You cannot run `rspec` you cannot run `learn`. You'll need to create your own sample instances for testing purposes. Make sure your associations and methods work in the console before submitting.

## Deliverables

### Basic Class Methods and Properties

#### Build the following methods on the `Passenger` class

- `Passenger#name`
  - returns a **string** that is the Passenger's name
  - Once a Passenger is created, the name cannot be changed.
- `Passenger#age`
  - returns a **number** that is the age
- `Passenger#seat_preference`
  - returns a **string** that is the Passenger's seat preference
- `Passenger.all`
  - should return **all** of the Passenger instances
- `Passenger.find_by_name`
  - given a string of a **passenger's name**, returns the **first Passenger** whose name matches

---

#### Build out the following methods on the `Destination` class

- `Destination#city`
  - returns a **string** that is the destination's name
- `Destination#climate`
  - returns a **string** that is the climate
- `Destination.all`
  - returns an array of all 
- `Destination.all_by_climate`
  - returns an array of all destinations that match a given climate

---

#### Build out the following methods on the `Ticket` class

- `Ticket#passenger`
  - returns the passenger object for that given ticket
  - Once a ticket is created, I should not be able to change the passenger
- `Ticket#destination`
  - returns the destination object for that given ticket
  - Once a ticket is created, I should not be able to change the destination

- seat_location (window/aisle)

- `Ticket.all`
  - returns all of the funding rounds

---

### Associations and Aggregate Methods

#### Passenger

- `Passenger#buy_ticket`
  - given a **destination object** and a seat location, create a ticket for this passenger
- `Passenger#tickets`
  - Returns an array of all the tickets for a passenger
- `Passenger#destinations`
  - Returns a **unique** array of all the destinations for this passenger
- `Passenger#good_seats`
  - Return an **array** of tickets where the seat location matches the customer's seat preference

#### Destination

- `Destination#tickets`
  - returns an array of all tickets purchased for this destination
- `Destination#passengers`
  - Returns a **unique** list of all passengers for this destination
- `Destination.most_popular` 
  - Return a **destination object** for the most popular destination (the destination with the most tickets)
- `Destination.least_popular` 
  - Return a **destination object** for the least popular destination (the destination with the fewest tickets)
---
