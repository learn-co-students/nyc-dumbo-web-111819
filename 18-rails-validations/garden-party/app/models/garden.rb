class Garden < ApplicationRecord
  has_many :plants, dependent: :destroy
end
