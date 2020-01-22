class OrderSerializer < ActiveModel::Serializer
  attributes :id, :timestamp, :price
  has_many :burgers
end
