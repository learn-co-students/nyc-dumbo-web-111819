User.destroy_all
Joke.destroy_all

u1 = User.create(username: "mazen")

j1 = Joke.create(content: "This is a test joke")

# << will attempt to create and save a new instance using the join model...
# if the associations are set up correctly
u1.jokes << j1
