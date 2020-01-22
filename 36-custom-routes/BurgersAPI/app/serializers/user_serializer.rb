class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount
  has_many :orders
end
