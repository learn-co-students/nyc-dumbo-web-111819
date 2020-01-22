class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :price, :category_id
end
