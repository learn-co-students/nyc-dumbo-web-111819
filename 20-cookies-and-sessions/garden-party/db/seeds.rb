puts "Resetting gardens..."
Garden.destroy_all

puts "Making gardens..."
Garden.create(
  name: "Dumbo Garden",
  width: 10,
  length: 10,
  staff_count: 100,
  location: "Dumbo, NYC"
)

Garden.create(
  name: "Access Garden",
  width: 10,
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

puts "Making plants..."
plant_emojis = %w(🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🍄 🌾 💐 🌷 🌺 🌸 🍏 🍎 🍐 🍋 🍒 🥕 🧄 🥔 🍍 🍉 🌽 🍇)

Garden.all.each do |garden|
  rand(10..20).times do
    x = rand(0...garden.width)
    y = rand(0...garden.length)
    Plant.create(
      garden: garden,
      color: Plant.valid_colors.sample,
      x: x,
      y: y,
      width: rand(1..4),
      length: rand(1..4),
      emoji: plant_emojis.sample
    )
  end
end

puts "Done 🌱"