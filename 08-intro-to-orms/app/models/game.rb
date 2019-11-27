class Game
  attr_accessor :title, :genre, :publisher

  # @@all = []

  def initialize(title, genre, publisher)
    @title = title
    @genre = genre
    @publisher = publisher

    # TODO: replace with database!
    # @@all << self
  end

  # Create
  def save
    # take a ruby instance
    # insert it into our SQL database
    sql = "INSERT INTO games (title, genre, publisher) VALUES (?, ?, ?)"
    DB[:conn].execute(sql, self.title, self.genre, self.publisher)
  end

  # Read
  def self.all
    sql = "SELECT * FROM games;"
    results = DB[:conn].execute(sql)

    results.map do |row|
      Game.new(row["title"], row["genre"], row["publisher"])
    end
  end

end