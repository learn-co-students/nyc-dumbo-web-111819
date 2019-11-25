require 'pry'
require_relative './book'
require_relative './author'

valentine = Author.new("Valentine")
saima = Author.new("Saima")
mohammed = Author.new("Mohammed")

happy_book = Book.new("yay book!", 1, valentine)
wow_book = Book.new("wow book", 2, valentine)

# initialize(title, word_count, author)
my_title_i_dont_know = Book.new("what book", 1, saima)
workbook = Book.new("workbook", 2, saima)
that_book = Book.new("that book", 1, saima)

binding.pry


