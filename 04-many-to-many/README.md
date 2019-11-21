Many to Many Relationship
===

## SWBATs
- Implement both sides of a many to many relationships
- Practice keeping groups of data related to classes on the class as a class variable
- Demonstrate Single Source of Truth by not storing collections of objects on other objects
- Demonstrate Single Source of Truth by not storing one object in multiple collections


## Objectives
- Review Relationships (one to many => has many, belongs to)
- Expand on relationships to express many to many
  - We'll build out a new relationship from scratch to teach this concept

## Relationships

User -< Tweet

League -< Team -< Player
City -< School -< Student

Movie -< Role >- Actor
Movie has many roles
Movie has man actors through roles

Actor has roles
Actor has movies through roles

Doctor -< Appointment >- Patient
1. Look up all the appoinments that belong to me
2. Get the information about each patient from the appointment

Manufacturer -< Car >- Dealership

Teacher -< Class >- Student

Driver -< Ride >- Passenger

User -< Account >- SocialMediaSite

AlienSpecies -< Colony >- Planet
1. Look up all the colonies that belong to me
2. Get the information about each planet from the colony

