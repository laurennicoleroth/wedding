class Guest < ApplicationRecord
  validates :name, :email, :address, presence: true
end
