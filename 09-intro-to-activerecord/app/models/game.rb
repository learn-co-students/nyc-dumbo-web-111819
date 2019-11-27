class Game < ActiveRecord::Base

  # CRUD
  
  # Create
  # Game.new - create a Ruby instance
  # Game#save - save a Ruby instance to the database
  # Game.create - new + save

  # Read
  # Game.all - gives us Ruby inst for all rows in the db
  # Game.first/last -> first/last instance in the db
  # Game.find(:id) -> find by the id 
  # Game.find_by() -> takes a hash and returns one inst
  # Game.where -> takes a hash and returns a collection

  # Update
  # Game#save -> take a Ruby instance and update it (if it already has an id)
  # Game#update -> takes a hash and updates the database
  # Game.update -> update alll the things

  # Delete
  # Game#destroy -> delete one thing from the database
  # Game.destroy_all -> delete everything

end