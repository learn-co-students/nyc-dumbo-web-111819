class Plant < ApplicationRecord
  belongs_to :garden

  # plant name should be unique (for that specific garden)
  # color has to be a 'valid' color
  validate :color_must_be_valid
 
  def color_must_be_valid
    valid_colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    if self.color.nil?
      self.errors.add(:color, "can't be blank")
    elsif !valid_colors.include?(self.color)
      self.errors.add(:color, "must be roygbiv")
    end
  end
end
