# when [:value] and ["value"]

require 'rest-client'
require 'pry'
require 'json'
require 'net/http'

def get_giph_api
  giph_api = JSON.parse(RestClient.get("http://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key=dc6zaTOxFJmzC&limit=10"))
  num = rand(0...9)
  gif = giph_api["data"][num]["id"]
  result = "https://media.giphy.com/media/#{gif}/giphy.gif"
  return result
end
