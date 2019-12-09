require 'sinatra'

get '/' do
  'hi'
end

get '/teapot' do
  "Hello World"
end

get '/emojis' do
  emojis = ["🤠", "🍞", "🍕", "🍍", "☃"]
  
  str = "<ul>"
  emojis.each_with_index do |emoji, index|
    str += "<li>#{index + 1} #{emoji}</li>"
  end
  str += "</ul>"

  # response
  "<html><head></head><body>#{str}</body></html>"
end