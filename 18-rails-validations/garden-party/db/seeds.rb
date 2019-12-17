# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "deleting gardens..."
Garden.destroy_all

puts "making gardens..."
Garden.create(
  name: "Dumbo Garden",
  width: 10,
  length: 10,
  staff_count: 100,
  location: "Dumbo, NYC"
)

Garden.create(
  name: "Access Garden",
  width: 20,
  length: 10,
  staff_count: 30,
  location: "Dumbo, NYC"
)

Garden.create(
  name: "Magic Garden",
  width: 20,
  length: 20,
  staff_count: 10,
  location: "Prague"
)

puts "Done 🌱"