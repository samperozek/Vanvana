class VanSerializer < ActiveModel::Serializer
  attributes :id, :year, :make, :model, :price
  has_one :user
  has_one :dealer
end
