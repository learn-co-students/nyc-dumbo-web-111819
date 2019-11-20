One to Many Relationships
===

### SWBATs

* Implement one object to many objects relationship
  * One object _has many_ objects
  * One object _belongs to_ another object
* Demonstrate the concept of an Entity Relationship Diagram
* Practice passing custom objects as arguments to methods
* Demonstrate Single Source of Truth
* Infer type of method (class or instance) through naming conventions

### Outline

* Quick review of OOP:
  * we created classes
  * we created instances of classes using `initialize`
  * we created instance and class methods
  * we used `attr_` macros for getters and setters
    attr_reader - getter
    attr_writer - setter
    attr_accessor - getter/setter
  * we looked at `self`


* Learn about object oriented relationships driven via _deliverables_!
  * Define terminology, understand the importance of using clear language in programming
    * Pair programming! Technical interviews!
  * Introduce new concepts
  * Convert those concepts to code
  * Learn how to test our own code (without Learn tests)

### Define

What do the following mean in plain English? What do they mean in programming?

* Model
  - a representation of a real world concept, blueprint, cookie cutter
  - object factory
  - class
* Domain
  - YouTube - Videos, Comments, Subscriptions
    - Video has many comments, Comment belongs to video
  - Twitter - Tweets, Hashtags, Profile/User 
    - User has many Tweets, Tweet belongs to User
* Domain modeling
* Relationships
  * One to many relationship
  * Many to many relationship

_Why do we care so much about codifying and being really specific about the terminology of has-many/belongs-to?_ The terms are very powerful because we can use the same idea to describe relationships across many different types of domains. The relationship between artist and song, is the same as book and author, user and tweets, etc.

* Schema
* Single Source of Truth
  * How can we start thinking about the data in our models?

### How to think about relationships
1. For every one (x), how many (y)? 
2. For every one (y), how many (x)?

### Deliverables

- [ ] Create a User class. The class should have these methods:
  - [x] `User#initialize` takes a username and a bio
  - [x] `User#username` returns a string for the username. _Should not_ be able to change after the user is created.
  - [x] `User#bio` returns a short biography for the user. _Should_ be able to change after the user is created.
  - [ ] `User#tweets` returns an array of Tweet instances
  - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection
  - [ ] `User.print_tweets` that prints the message of each tweet to the screen in a pretty way
  - [ ] *bonus* `User.most_tweets` returns the instance of the user who has made the most tweets

- [x] Create a Tweet class. The class should have these methods:
  - [x] `Tweet#message` returns a string
  - [x] `Tweet#user` returns an instance of the user class
  - [x] `Tweet.all` returns all the Tweets created.
  - [x] `Tweet#username` returns the username of the tweet's user

### Discussion Questions

- What is a one-many-relationship? How would we draw that in an ERD?
- What does Single Source of Truth mean?
- What is a model? Domain? Domain model?
- What is the relationship between a class and an instance?
