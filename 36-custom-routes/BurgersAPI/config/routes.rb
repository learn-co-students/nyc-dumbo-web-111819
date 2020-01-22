Rails.application.routes.draw do

  post '/users/history', to: 'users#history'

  # post '/orders', to: 'orders#create'

  resources :categories, only: [:index]
  resources :burgers, only: [:create]
  resources :orders, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
