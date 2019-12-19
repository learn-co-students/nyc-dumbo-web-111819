class Camper < ApplicationRecord
  has_many :sign_ups
  has_many :activities, through: :sign_ups

end
