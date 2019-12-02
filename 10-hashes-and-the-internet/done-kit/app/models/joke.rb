class Joke < ActiveRecord::Base
  has_many :user_jokes
  has_many :users, through: :user_jokes

end
