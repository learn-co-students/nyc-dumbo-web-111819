require 'pry'
require_relative 'alien_species'
require_relative 'planet'
require_relative 'colony'

# race, warp_capability, preferred_climate
ewok = AlienSpecies.new("ewok", false, "forests")
vulcans = AlienSpecies.new("vulcans", true, "desert")
saiyan = AlienSpecies.new("saiyan", true, "anything")

earth = Planet.new("earth", "all kinds")
tattooine = Planet.new("tattooine", "desert")
vegeta = Planet.new("vegeta", "all kinds")

# name, population, planet, alien_species
nyc = Colony.new("nyc", 8_000_000, earth, saiyan)
cantina = Colony.new("mos eisley cantina", 5_000, tattooine, saiyan)

binding.pry
"bye"