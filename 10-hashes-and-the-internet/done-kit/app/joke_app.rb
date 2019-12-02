require 'pry'

class JokeApp
  attr_reader :user

  def run
    welcome
    login_or_signup
    wanna_see_favs?
    get_joke(what_subject)
  end

  private

  def welcome
    # Display a welcome message
    puts "Howdy! Are you ready for some jokes?"
  end

  def login_or_signup
    # Prompt for some input (give us your username)
    puts "Please enter your username to sign up or log in:"
    # Save or create the user input
    username = gets.chomp.downcase
    # Log In: Find a user in the database with their username
    @user = User.find_or_create_by(username: username)
    system 'clear'
    # Why not some message
    puts "Alrighty, #{@user.username.capitalize}!"
    # Freeze for a bit
    sleep(0.3)
  end

  def wanna_see_favs?
    puts "Wanna see your fav jokes?"
    answer = gets.chomp
    if answer.downcase == "yes"
      system 'clear'
      # again, a helper method
      show_jokes
      # binding.pry
      puts "\n"
    else
      puts "Alrighty!"
    end
    # Prompt user but split the prompts so it's more readible
    puts "What do you want to hear a joke about?"
    sleep(0.1)
    puts "Write 'random' to see a random joke"
  end

  def show_jokes
    if @user.jokes.length == 0
      no_jokes
    else
      user_favs
    end
  end

  def user_favs
    # let's create a method that will show all the jokes on different colors so it's not boring! Oho, Ruby has a method that turns strings into symbols, as I just learned
    # binding.pry
    @user.jokes.map do |j|
      font_color = ["red", "blue", "black"].sample.to_sym
      background_color = ["light_cyan", "light_white", "light_green", "light_magenta", "light_yellow", "cyan"].sample.to_sym
      puts j.content.colorize(:color => font_color, :background => background_color) + "\n"
    end
  end

  def no_jokes
    # just a simple message
    puts "You have no fav jokes yet!\n".colorize(:color => :black, :background => :yellow)
    puts "Let's change that!\n".colorize(:color => :black, :background => :yellow)
  end

  def what_subject
    # save the response
    joke_subject = gets.chomp.downcase
  end

  def get_joke(subject)
    # save url to a variable
    url = "https://icanhazdadjoke.com/"
    # if user's response was random, just use the url, if not, concatenate
    if subject == "random"
      search_jokes(url)
    else
      search_jokes(url+"search?term=#{subject}")
    end
  end

  def search_jokes(url)
    # here is a curl-to-ruby convertor I found: https://jhawthorn.github.io/curl-to-ruby/
    ##### YOU DON'T NEED TO KNOW WHAT EACH LINE DOES BUT JUST IN CASE I'M ADDING EXPLANATIONS #####
    # parse the URL
    uri = URI.parse(url)
    # save the request to a variable
    request = Net::HTTP::Get.new(uri)
    # set an accept header to text/plain
    request["Accept"] = "text/plain"
    # set options to a hash with the ssl key
    req_options = {
      use_ssl: uri.scheme == "https",
    }
    # now, parse the response to our request
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    # at this point, I wanted to see what I was getting, so naturally:
    # binding.pry
    resp = response.body.split(/(?<!\r)\n/).sample.to_s.force_encoding("UTF-8")
    # see at the bottom how many trials it took me to get the regex right and then the encoding

    # now, if the user wrote some gibberish or there's no record, put a message and if there is, save the joke to the Joke database;
    if resp == nil || resp.length == 0 #see what happens if you put nil on the right!
      puts "Sorry! No jokes about it"
    else
      joke = Joke.find_or_create_by(content: resp)
      system 'clear'
      # let's add some color and embold it <- it comes with colorize!
      puts resp.colorize(:color => :red, :background => :cyan).bold
    end
    sleep(0.5)
    # then ask the User if they want to save they joke to their favs
    save_it?(joke)
  end

  def save_it?(joke)
    puts "Do you want to save this joke to your favs?"
    answer = gets.chomp
    # delegate to helper methods
    if answer == "yes"
      fav_joke(joke)
    elsif answer == "no"
      another_one?
    else
      puts "Say 'yes' or 'no'"
      # recursion -- the method is calling on itself
      save_it?
    end
  end

  def fav_joke(joke)
    # save the joke and display a message
    UserJoke.find_or_create_by(joke_id: joke.id, user_id: @user.id)
    system 'clear'
    puts "saved!\n"
    sleep(0.5)
    # give an option to see next joke
    another_one?
  end

  def another_one?
    # set up an array with prompts so it doesn't get repetitive
    prompts = ["Wanna hear another one?", "Wanna one more?", "Wanna more laughs?"]
    # sample a prompt
    puts prompts.sample
    # helper method to determine what's next
    next_steps
  end

  def next_steps
    # save user's response
    answer = gets.chomp
    # if yes,
    if answer == "yes"
      get_joke(what_subject)
    elsif answer == "no"
      # say bye bye
      puts "goodbye!"
      sleep(0.5)
      BananaMan.go
      system 'exit'
    else
      puts "Say 'yes' or 'no'"
      # recursion -- the method is calling on itself
      next_steps
    end
  end

end

###################################
# final answer: response.body.split(/(?<!\r)\n/).sample

#### here are my google queries:
# "ruby split string if not followed by"
# "how to regex one character but not if followe by another" <-- this is the winner!!!!!!!!

#### here are the pages I visited:
# https://stackoverflow.com/questions/38532220/ruby-split-string-and-preserve-separator
# https://www.regular-expressions.info/ <-- this helped!!!!!!!!

#### here are the trials from the last to the first:
# response.body.split(/n(?!\r)/)
# response.body.split(/\r(?!\n)/)
# response.body.split(/(\n)(?:[^\r])/)
# response.body.split(/(\n)(:[^\r])/)
# response.body.split(/(\n)(?[^\r])/)
# response.body.split(/(\n)([^\r])/)
# response.body.split(/(\n)(?:[^\r])/)
# response.body.split((<)(?:[^%])
# response.body.split("\n")
# response.body.gsub!("\r", "").split("\n")
# response.body.split("\n").gsub!("\r", " ")

#### And when I thought all is well, I got this error: "incompatible character encodings: ASCII-8BIT and UTF-8", which was due to the fact that the API was not written for Ruby and did not include the Ruby encoding.
#### I added then: to_s.force_encoding("UTF-8")
#### first, I wanted to make sure it still is a string and then force encoding (googled "How to encode Ruby UTF-8")
