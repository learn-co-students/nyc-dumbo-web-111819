Intro to Object Orientation
===

## SWBATs
- [ ] Define `object` in programming domain
- [ ] Explain the concept of sending messages
- [ ] Create a class and instantiate an instance of the class
- [ ] Explain the difference between a class and an instance
- [ ] Pass arguments to `new` by defining an initialize method in class
- [ ] Create instance methods
- [ ] Call methods on the implicit or explicit `self`
- [ ] Define attribute readers and writers using `attr_` macros
- [ ] Get more practice with array compositions (`each`, `map`, `select`, `find`)
- [ ] Explain the need for variable scope and why it's important to not utilize global variables

## Outline
- Demonstrate class methods and instance methods on in-built Ruby classes (String, Array)
  - methods as sending messages
  - how to send a message to an object (dot notation, `send`)
  - Monkey patching

- Build a `BankAccount` class using the deliverables below
  - `new` and `initialize`
  - instance methods
  - instance variables
  - `attr_` macros


## Discussion Questions
- What is an object?
- What's the difference between a class and an instance?
- What is the difference between a local variable and an instance variable?
- What is self in a class method?
- What is self in an instance method?


## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```rb
bank_account = { account_number: 12345, balance: 100 }
```

Write an implementation of a bank account that meets the following requirements:

- can print the balance of the account
- can deposit money into the account
- can withdraw money from the account
- keeps track of the account holder
- can show me all the bank accounts that have been created
*bonus*
- can find a bank account based on the account number

## Links
https://www.eriktrautman.com/posts/ruby-explained-objects-and-methods