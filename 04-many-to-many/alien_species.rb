class AlienSpecies
  attr_reader :race, :warp_capability, :preferred_climate

  # race, warp_capability, preferred_climate
  def initialize(race, warp_capability, preferred_climate)
    @race = race
    @warp_capability = warp_capability
    @preferred_climate = preferred_climate
  end

  def colonies
    # get access to all the colonies
    Colony.all.select do |colony_instance|
      # find out which colonies belong to me
      colony_instance.alien_species == self
    end
  end

  def planets
    # 1. Look up all the colonies that belong to me
    self.colonies.map do |colony_instance|
      # 2. Get the information about each planet from the colony
      colony_instance.planet
    end
  end

end
