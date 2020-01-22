class Order < ApplicationRecord
  belongs_to :user
  has_many :burger_orders
  has_many :burgers, through: :burger_orders

  def timestamp
    self.created_at.strftime("Ordered on %I:%M %p")
  end
  
end
