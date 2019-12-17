class Garden < ApplicationRecord
  has_many :plants, dependent: :destroy

  # staff count can't exceed 100 ppl
  validates :staff_count, numericality: {
    less_than_or_equal_to: 100,
    greater_than_or_equal_to: 5
  }

  validates :name, presence: true

  validates :length, inclusion: { in: 5..50, message: "needs to be between 5 and 50" } 

  # size and width have in a range 5..50
end
