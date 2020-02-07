eric = User.create(username: "Eric", password: "password")
rei = User.create(username: "Rei", password: "fortnite")

10.times do
  Snack.create(name: Faker::Dessert.variety, user: eric)
end

10.times do
  Snack.create(name: Faker::Food.vegetables, user: rei)
end
