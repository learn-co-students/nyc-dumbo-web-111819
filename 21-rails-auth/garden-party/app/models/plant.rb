class Plant < ApplicationRecord
  belongs_to :garden

  validates :color, presence: true
  validate :color_must_be_valid
  validate :coordinates_within_garden
 
  def self.valid_colors
    ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  end

  def color_must_be_valid
    if !Plant.valid_colors.include?(self.color)
      self.errors.add(:color, "must be roygbiv")
    end
  end

  def coordinates_within_garden
    if x < 0 || x >= garden.width || end_x < 0 || end_x >= garden.width
      self.errors.add(:x, "coordinate outside of garden size! Must be between 0 and #{garden.width}")
    end
    if y < 0 || y >= garden.length || end_y < 0 || end_y >= garden.length
      self.errors.add(:y, "coordinate outside of garden size! Must be between 0 and #{garden.length}")
    end
  end

  def end_x
    x + width
  end

  def end_y
    y + length
  end

end
