Rails.application.routes.draw do

  resources :snacks, only: [:index, :create]
  resources :users, only: [:show, :create]

  # VERB 'URL', to: "CONTROLLER#ACTION_NAME"

  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
