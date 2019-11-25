require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

p1 = Passenger.new("Ian", 1, "window")
p2 = Passenger.new("Mazen", 2, "aisle")
p3 = Passenger.new("Sylwia", 3, "window")

d1 = Destination.new("Cincinnati", "Midwestern")
d2 = Destination.new("Toyko", "Cold right now")
d3 = Destination.new("Colon", "Rainy")
d4 = Destination.new("Marrakech", "Mediterranean")

t1 = Ticket.new(passenger: p1, destination: d1)
t2 = Ticket.new(destination: d4, seat_location: "window", passenger: p1)
t3 = Ticket.new(passenger: p2, destination: d2, seat_location: "aisle")
t4 = Ticket.new(passenger: p2, destination: d4, seat_location: "center")
t5 = Ticket.new(passenger: p3, destination: d3, seat_location: "window")
t6 = Ticket.new(passenger: p1, destination: d3, seat_location: "window")
t7 = Ticket.new(passenger: p2, destination: d3, seat_location: "aisle")


binding.pry
0 #leave this here to ensure binding.pry isn't the last line