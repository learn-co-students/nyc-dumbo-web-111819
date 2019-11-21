class Colony
  attr_reader :name, :population, :planet, :alien_species

  @@all = []

  # name, population, planet, alien_species
  def initialize(name, population, planet, alien_species)
    @name = name
    @population = population
    @planet = planet
    @alien_species = alien_species

    @@all << self
  end

  def self.all
    @@all
  end

end
