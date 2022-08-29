class Dealer < ApplicationRecord
    has_many :vans
    has_many :users, through: :vans
end
