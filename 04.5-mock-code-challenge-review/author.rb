class Author

    attr_accessor :name
  
    @@all = []
  
    def initialize(name)
      @name = name
      
      @@all << self
    end
  
    def self.all
      @@all    
    end
  
    def books
      # from all the books in the world
      # select the books that are connected to the author
      Book.all.select do |book|
        book.author == self
      end 
    end
  
    def write_book(title, word_count)
      # should take arguments of a title and word count and make a new Book instance associated with this author
      # new Book 
      # author = self
      # binding.pry
      Book.new(title, word_count, self)
    end
  
    def total_words
      # should return the total number of words that author has written across all of their authored books.
      # all the books by the author -> .books
      # total number of word_count (?)
      # binding.pry
  
      # LONGEST VERSION
      all_the_word_counts = self.books.map do |book|
        book.word_count
      end
  
      ####### SHORTER VERSION######
      # all_the_word_counts = self.books.map{|book| book.word_count}
  
      ###### SHORTEST VERSION######
      # all_the_word_counts = self.books.map(&:word_count)
  
      all_the_word_counts.sum
    end
  
    def self.most_words
      # should return the author instance who has written the most words
      # all the authors in the world -> soort them by total_words -> [0]
      # author.total_words sort? sort_by? max? max_by?
      # counts_authors = Author.all.map do |author|
      #   [author, author.total_words]
      # end
  
      # sorted = counts_authors.sort_by do |element|
      #   element[1]
      # end 
  
      # sorted.last
      # shorter version:
      # counts_authors = Author.all.map{|a| [a, a.total_words]}
      # counts_authors.sort_by{|element| element[1]}.last
  
      # the shortest and ugliest:
      # Author.all.map{|author| [author, author.total_words]}.sort_by{|element| element[1]}.last
  
    end
  
  
  end
  
  
  
  ############### TO DO ##############
  # - `Author.most_words`
  # should return the author instance who has written the most words
  
  
    # - `Author.all`
    # should return all of the authors
    # - `Author#books`
    # should return all of the books an author has written
    # - `Author#write_book`
    # should take arguments of a title and word count and make a new Book instance associated with this author
    # - `Author#total_words`
  # should return the total number of words that author has written across all of their authored books.
  
  