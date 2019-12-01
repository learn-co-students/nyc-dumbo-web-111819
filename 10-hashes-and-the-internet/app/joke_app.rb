require 'pry'

class JokeApp
  attr_reader :user

  def run
    welcome
    login_or_signup
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
  # Save the user input
  username = gets.chomp.downcase
    # Log In: Find a user in the database with their username
  @user = User.find_or_create_by(username: username)
  system 'clear'
  puts "Alrighty, #{@user.username.capitalize}!"
  sleep(0.3)
end

def what_subject
  puts "What do you want to hear a joke about?"
  sleep(0.1)
  puts "Write 'random' to see a random joke"
  return joke_subject = gets.chomp.downcase

end

def get_joke(subject)
  url = "https://icanhazdadjoke.com/"
  if subject == "random"
    search_jokes(url)
  else
    search_jokes(url+"search?term=#{subject}")
  end
  another_one?
end

def search_jokes(url)
  uri = URI.parse(url)
  request = Net::HTTP::Get.new(uri)
  request["Accept"] = "text/plain"

  req_options = {
    use_ssl: uri.scheme == "https",
  }

  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
  end
  # binding.pry
  # see below how many trials it took me to get the line below
  resp = response.body.split(/(?<!\r)\n/).sample
  if resp == nil || resp.lenght == 0 #see what happens if you put nil on the right!
    puts "Sorry! No jokes about it"
  else
    puts resp
  end
  sleep(0.5)
end

def another_one?
  prompts = ["Wanna hear another one?", "Wanna one more?", "Wanna more laughs?"]
  puts prompts.sample
  next_steps
end

def next_steps
  answer = gets.chomp
  if answer == "yes"
    get_joke(what_subject)
  elsif answer == "no"
    puts "goodbye!"
    system 'exit'
  else
    puts "Say 'yes' or 'no'"
    next_steps
  end
end


    # welcome
    # login_or_signup
    #
    # joke_title = get_search_input
    #
    # joke_hash = search_google_jokes(joke_title)
    #
    # # display each title to the user
    # jokes_array = joke_hash["items"]
    # titles = jokes_array.map do |joke_hash|
    #   joke_hash["volumeInfo"]["title"]
    # end
    # titles.each do |title|
    #   puts title
    # end
    #
    # # maybe this -> and save jokes to my library


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
