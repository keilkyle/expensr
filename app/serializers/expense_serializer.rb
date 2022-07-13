class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :date, :amount, :user_id, :tags
  has_one :user
  has_many :tags
end
