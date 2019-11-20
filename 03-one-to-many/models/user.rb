class User
  attr_reader :username #, :species
  attr_accessor :bio
  # def bio
  #   @bio
  # end
  # def bio=(new_bio)
  #   @bio = new_bio
  # end
  # def username
  #   @username
  # end

  def initialize(username, bio)
    @username = username
    @bio = bio
  end

  def post_tweet(message)
    # do something
    Tweet.new(message, self)
  end

  def tweets
    tweet_array = Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
    
    tweet_array
  end

end # end of User class