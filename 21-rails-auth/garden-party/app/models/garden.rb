class Garden < ApplicationRecord
  belongs_to :gardener
  has_many :plants, dependent: :destroy

  # staff count can't exceed 100 ppl
  validates :staff_count, numericality: {
    less_than_or_equal_to: 100,
    greater_than_or_equal_to: 5
  }

  validates :name, presence: true

  validates :length, inclusion: { in: 5..50, message: "needs to be between 5 and 50" } 

  # size and width have in a range 5..50

  def to_matrix
    matrix = Array.new(width) { Array.new(length) }
    plants.each do |plant|
      for x in plant.x...plant.end_x do
        for y in plant.y...plant.end_y do
          matrix[y][x] = plant
        end
      end
    end
    matrix
  end

  def crops
    plants.pluck(:emoji).uniq.join("")
  end
end
