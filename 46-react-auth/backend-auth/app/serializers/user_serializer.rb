class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :super_private_banking_info
  has_many :snacks
end
