Rails.application.routes.draw do
  resources :plants, only: [:show]
  
  resources :gardens do
    resources :plants, only: [:new, :create] 
  end

end
