class Book

    attr_accessor :title, :word_count, :author
  
    @@all = []
  
    def initialize(title, word_count, author)
      @title = title
      @word_count = word_count
      @author = author
      
      @@all << self
    end
  
    def self.all
      @@all    
    end
  
  end
  
  ############### DONE ##############
  
    # - `Book#author`
    # should return the author instance who wrote this book
    # - `Book#title`
    # should return the title of the book
    # - `Book#word_count`
    # should return the number of words in the book
  
    # - `Book.all`
    # should return all of the books