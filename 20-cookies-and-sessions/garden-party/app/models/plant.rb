class Plant < ApplicationRecord
  belongs_to :garden

  # plant name should be unique (for that specific garden)
  # color has to be a 'valid' color
  validates :color, presence: true
  validate :color_must_be_valid
 
  def valid_colors
    ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  end

  def color_must_be_valid
    if !valid_colors.include?(self.color)
      self.errors.add(:color, "must be roygbiv")
    end
  end
end
