Rails.application.routes.draw do
  resources :plants, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # get "/gardens", to: "gardens#index", as: "gardens"
  # get "/gardens/:id", to: "gardens#show", as: "garden"
  # get "/gardens/new", to: "gardens#new", as: "new_garden"
  # post "/gardens", to: "gardens#create"
  # get "/gardens/:id/edit", to: "gardens#edit", as: "edit_garden"
  # patch "/gardens/:id", to: "gardens#update"
  
  resources :gardens #, only: [:index, :show, :new, :create, :edit, :update, :destroy]

end
