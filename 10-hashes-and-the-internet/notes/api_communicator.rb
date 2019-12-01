require 'rest-client'
require 'json'
require 'pry'
# require_relative 'command_line_interface.rb'
require_relative 'api_giphs.rb'



def random_quote
  cn_api = JSON.parse(RestClient.get("https://api.chucknorris.io/jokes/random"))
  result = cn_api["value"]
  puts "\n#{result}"
end

def get_cn_api(word)
  url = "https://api.chucknorris.io/jokes/search?query=#{word}"
  word == "random" ? random_quote :
  cn_api = JSON.parse(RestClient.get(url))
  if cn_api["total"] != 0
    num = rand(0...cn_api["total"])
    result = cn_api["result"][num]["value"]
    puts "\n#{result}"
  else
    puts "There are no Chuck Norris quotes for that word"
    try_again?
  end
  repeat?
end
