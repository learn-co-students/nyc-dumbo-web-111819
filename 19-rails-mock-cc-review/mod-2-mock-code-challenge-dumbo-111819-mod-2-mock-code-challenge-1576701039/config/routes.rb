Rails.application.routes.draw do
  resources :sign_ups, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :activities, only: [:index, :show]
  resources :campers, only: [:index, :show]
end
