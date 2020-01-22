class OrderSerializer < ActiveModel::Serializer
  attributes :id, :timestamp
  has_many :burgers
end
