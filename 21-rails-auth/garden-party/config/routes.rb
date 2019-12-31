Rails.application.routes.draw do
  resources :gardeners
  resources :plants, only: [:show]
  
  get "/gardens/mine", to: "gardens#my_gardens", as: "my_gardens"
  resources :gardens do
    resources :plants, only: [:new, :create] 
  end

  patch "/sessions/reset", to: "sessions#reset_counter"

  get "/signup", to: "gardeners#new", as: "signup"
  post "/signup", to: "gardeners#create"

  get "/login", to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy", as: "logout"
end
