class User < ApplicationRecord
    has_many :vans
    has_many :dealers, through: :vans

    has_secure_password #this activates BCrypt
end
