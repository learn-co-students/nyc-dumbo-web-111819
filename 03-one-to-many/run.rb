require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

user = User.new("coffee_dad", "Just a coffe lovin dad")
user2 = User.new("tea_mom", "Tea > Coffee")

Tweet.new("coffee coffee coffee", user)
Tweet.new("havin #a coffee", user)
Tweet.new("what is time even?", user)

user.post_tweet("java is great")
user2.post_tweet("T for ME")

binding.pry
"bye"