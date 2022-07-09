class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :date, :amount, :user_id
end
