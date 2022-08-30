class VanSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :price, :imageURL
  has_one :user
  has_one :dealer
end
