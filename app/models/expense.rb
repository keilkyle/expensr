class Expense < ApplicationRecord
    belongs_to :user
    has_many :expensetags
    has_many :tags, through: :expensetags
end
