class Destination
  attr_reader :city, :climate

  @@all = []

  def initialize(city, climate)
    @city = city
    @climate = climate

    @@all << self
  end

  def tickets
    Ticket.all.select do |ticket|
      ticket.destination == self
    end

    # Ticket.all.select do |ticket_instance|
    #   ticket_instance.passenger == self
    # end
  end

  def passengers
    # use the tickets method
    # return an array of tickets going to this destination
    # pull out all the passengers from those tickets into an array
    passenger_array = self.tickets.map do |ticket|
      ticket.passenger
    end
    # find the unique passengers in that array
    passenger_array.uniq
  end

  def self.most_popular
    # option 1
    # sort the list of all destinations by the number of tickets
    sorted_destinations = self.all.sort_by do |destination|
      destination.tickets.count
    end
    # return the last destination from the sorted list
    sorted_destinations.last

    # option 2
    # max_by
    self.all.max_by do |destination|
      destination.tickets.count
    end
  end

  def self.least_popular
    # option 1
    # sort the list of all destinations by the number of tickets
    sorted_destinations = self.all.sort_by do |destination|
      destination.tickets.count
    end
    # return the first destination from the sorted list
    sorted_destinations.first

    # option 2
    # min_by
    self.all.max_by do |destination|
      destination.tickets.count
    end
  end

  def self.all
    @@all
  end

end