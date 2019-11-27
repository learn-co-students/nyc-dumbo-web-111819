require_relative "../config/environment"

class Clown
  attr_accessor :name, :age, :fears, :skill

  def initialize(args_hash)
    args_hash.each do |key, value|
      self.send("#{key}=", value)
    end
  end

end

krusty = Clown.new(
  name: "Krusty", 
  fears: "Children", 
  age: 2, 
  skill: "Juggling Chainsaws"
)

pennywise = Clown.new(
  age: 100, 
  name: "Pennywise", 
  fears: "People not being afraid of him", 
  skill: "Can transform into your worst nightmare"
)

binding.pry
"yay"