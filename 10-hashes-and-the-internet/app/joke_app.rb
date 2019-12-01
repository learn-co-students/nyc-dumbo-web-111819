class JokeApp
  attr_reader :user

  def run
    welcome
    login_or_signup

    joke_title = get_search_input

    joke_hash = search_google_jokes(joke_title)

    # display each title to the user
    jokes_array = joke_hash["items"]
    titles = jokes_array.map do |joke_hash|
      joke_hash["volumeInfo"]["title"]
    end
    titles.each do |title|
      puts title
    end

    # maybe this -> and save jokes to my library

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
    puts "Please enter a joke to search:"
    joke_search = gets.chomp
    # fix the string formatting
    joke_search.gsub!(" ", "+")
  end

  def search_google_jokes(joke_title)
    # use that input to make a request to Google API
    response = RestClient.get "https://www.googleapis.com/jokes/v1/volumes?q=#{joke_title}"
    # parse the response into a Hash
    JSON.parse(response.body)
  end
end
