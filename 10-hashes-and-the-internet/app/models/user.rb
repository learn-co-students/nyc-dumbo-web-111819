class User < ActiveRecord::Base
  has_many :user_jokes
  has_many :jokes, through: :user_jokes
end
