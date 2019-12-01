User.destroy_all
Book.destroy_all

u1 = User.create(username: "ian")

b1 = Book.create(title: "Mastering Mod 1", authors: "Graham Troyer-Joy")

# << will attempt to create and save a new instance using the join model...
# if the associations are set up correctly
u1.books << b1