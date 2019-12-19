class Activity < ApplicationRecord
  has_many :sign_ups
  has_many :campers, through: :sign_ups

  def display_activity
    "#{self.name} | #{self.difficulty}"
  end
end
