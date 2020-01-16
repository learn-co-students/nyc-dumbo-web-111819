class Toy < ApplicationRecord
  validates :name, uniqueness: true
  validates_presence_of :name
end
