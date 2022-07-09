class Expensetag < ApplicationRecord
    belongs_to :expense
    belongs_to :tag
end
