class User < ApplicationRecord
  has_many :snacks
  validates :username, uniqueness: true
  has_secure_password

  def super_private_banking_info
    Faker::Bank.account_number
  end

end
