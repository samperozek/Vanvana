class User < ApplicationRecord
    has_many :vans
    has_many :dealers, through: :vans

    has_secure_password
end
