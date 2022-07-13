class TagSerializer < ActiveModel::Serializer
  attributes :id, :name, :expenses
  has_many :expenses
end
