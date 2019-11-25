class Passenger
  attr_reader :name, :age, :seat_preference

  @@all = []

  def initialize(name, age, seat_preference)
    @name = name
    @age = age
    @seat_preference = seat_preference

    @@all << self
  end

  def buy_ticket(destination, seat_location)
    Ticket.new({
      destination: destination, 
      passenger: self, 
      seat_location: seat_location
    })
  end

  # passenger has_many tickets
  def tickets
    Ticket.all.select do |ticket_instance|
      ticket_instance.passenger == self
    end
  end

  # passenger has_many destinations, through tickets
  def destinations
    destinations_array = self.tickets.map do |ticket_instance|
      ticket_instance.destination
    end
    destinations_array.uniq
  end

  def good_seats
    # filter tickets that match the passenger's seat location
    self.tickets.select do |ticket|
      ticket.seat_location == self.seat_preference
    end
  end

  def self.all
    @@all
  end

  def self.find_by_name(passenger_name)
    p self
    Passenger.all.find do |passenger|
      passenger.name == passenger_name
    end
  end

end