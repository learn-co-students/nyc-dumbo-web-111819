class Game
  attr_accessor :title, :genre, :publisher

  @@all = []

  def initialize(title, genre, publisher)
    @title = title
    @genre = genre
    @publisher = publisher

    # TODO: replace with database!
    @@all << self
  end

  # TODO: replace with database!
  def self.all
    @@all
  end

end