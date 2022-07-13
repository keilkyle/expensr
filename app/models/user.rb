class User < ApplicationRecord
    has_many :expenses
    has_many :tags, through: :expenses
    has_secure_password
end
