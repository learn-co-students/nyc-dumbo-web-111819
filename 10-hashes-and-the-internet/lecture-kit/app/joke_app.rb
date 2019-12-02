class JokeApp
  # it is not an AR class so you need to add attr
  attr_reader :user

  def run
    welcome
    login_or_signup
    # wanna_see_favs?
    # get_joke(what_subject)
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

end 
