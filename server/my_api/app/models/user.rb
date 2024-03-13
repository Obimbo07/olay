class User < ApplicationRecord
    has_many :investment
    has_one :account
end
