class Tag < ApplicationRecord
    has_many :expensetags
    has_many :expenses, through: :expensetags
end
