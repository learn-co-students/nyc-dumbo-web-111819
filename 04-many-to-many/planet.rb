class Planet
  attr_reader :name, :climate

  @@all = []

  # name, climate
  def initialize(name, climate)
    @name = name
    @climate = climate

    @@all << self
  end

  def colonies
    # get access to all the colonies
    Colony.all.select do |colony_instance|
      # find out which colonies belong to me
      colony_instance.planet == self
    end
  end

  def alien_species
    # 1. Look up all the colonies that belong to me
    self.colonies.map do |colony_instance|
      # 2. Get the information about each planet from the colony
      colony_instance.alien_species
    end
  end


  def self.all
    @@all
  end
end
