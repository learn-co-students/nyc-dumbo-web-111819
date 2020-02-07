class User < ApplicationRecord
  has_many :snacks

  def super_private_banking_info
    Faker::Bank.account_number
  end

end
