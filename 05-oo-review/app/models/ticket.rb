class Ticket
  attr_reader :passenger, :destination, :seat_location

  @@all = []

  def initialize(params_hash)
    @passenger = params_hash[:passenger]
    @destination = params_hash[:destination]
    @seat_location = params_hash[:seat_location] || "center"

    @@all << self
  end

  def self.all
    @@all
  end

end