User.destroy_all
Joke.destroy_all

user1 = User.create(username: "mazen")

joke1 = Joke.create(content: "This is a test joke")
joke2 = Joke.create(content: "This is again a test joke")

user_joke = UserJoke.create(user_id: user1.id, joke_id: joke2.id)


# << will attempt to create and save a new instance using the join model...
# if the associations are set up correctly
user1.jokes << joke1
