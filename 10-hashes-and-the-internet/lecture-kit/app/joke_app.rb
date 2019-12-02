class JokeApp
  # it is not an AR class so you need to add attr
  attr_reader :user

  def run
    welcome
    login_or_signup
    get_joke(what_subject)
  end

  private

  def welcome
    puts "Howdy! Isn't this a wonderful day for some jokes?!?!"
    sleep(1)
    puts "HAHA"
    puts "HAHA"
  end

  def login_or_signup
    # fit certain number of choices that will prompt users to act
    puts "What's your name to sign up or login?"
    answer = gets.chomp.downcase
    # we want to either sign them up or login
    @user = User.find_or_create_by(username: answer)
    sleep(1)
    puts "Alrighty, #{@user.username.capitalize}!"
    # binding.pry
  end

  def get_joke(subject)
    url = "https://icanhazdadjoke.com/" #random
    search_term = "search?term=#{subject}" #specific

    if subject.downcase == "random"
      uri = URI.parse(url)
    else
      uri = URI.parse(url + search_term)
    end

    request = Net::HTTP::Get.new(uri)
    request["Accept"] = "text/plain"
    
    req_options = {
      use_ssl: uri.scheme == "https",
    }
    
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    end

    # binding.pry

    joke = response.body.split(/(?<!\r)\n/)
    
    # there was no jokes?!?!!
    if joke == nil || joke.count == 0 
      puts "no jokes about it!"
    else 
      puts joke.sample.to_s.force_encoding("UTF-8")
    end
    
  end

  def what_subject
    puts "Joke topic of choosing?"
    sleep(0.5)
    puts "Write 'random' if you want a surprise."
    return answer = gets.chomp
  end

end 
