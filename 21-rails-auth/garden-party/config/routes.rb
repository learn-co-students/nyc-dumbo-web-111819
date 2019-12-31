Rails.application.routes.draw do
  resources :gardeners
  resources :plants, only: [:show]
  
  resources :gardens do
    resources :plants, only: [:new, :create] 
  end

  patch "/sessions/reset", to: "sessions#reset_counter"

  get "/signup", to: "gardeners#new", as: "signup"
  post "/signup", to: "gardeners#create"
end
