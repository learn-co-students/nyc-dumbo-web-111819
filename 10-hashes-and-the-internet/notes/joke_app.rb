class BookApp
  attr_reader :user
  
  def run
    welcome
    login_or_signup
    
    book_title = get_search_input
    
    book_hash = search_google_books(book_title)
    
    # display each title to the user
    books_array = book_hash["items"]
    titles = books_array.map do |book_hash|
      book_hash["volumeInfo"]["title"]
    end
    titles.each do |title|
      puts title
    end

    # maybe this -> and save books to my library

  end

  private

  def welcome
    # Display a welcome message
    puts "Welcome to nyc-dumbo-web-102819's Book App!"
  end

  def login_or_signup
    # Prompt for some input (give us your username)
    puts "Please enter your username to sign up or log in" 
    # Save the user input
    username = gets.chomp

    # Log In: Find a user in the database with their username
    @user = User.find_or_create_by(username: username)
  end

  def get_search_input
    puts "Please enter a book to search:"
    book_search = gets.chomp
    # fix the string formatting
    book_search.gsub!(" ", "+")
  end

  def search_google_books(book_title)
    # use that input to make a request to Google API
    response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{book_title}"
    # parse the response into a Hash
    JSON.parse(response.body)
  end
end
