eric = User.create(username: "Eric", password: "password")

10.times do
  Snack.create(name: Faker::Dessert.variety)
  Snack.create(name: Faker::Food.vegetables)
end

5.times do
  UserSnack.create(user: User.first, snack: Snack.all.sample)
end
