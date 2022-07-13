class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :expenses, :tags
  has_many :expenses
  has_many :tags
end
