Rails.application.routes.draw do
  resources :dogs, only: [:show, :index]
  resources :employees
  # welcome page
  get '/', to: 'welcome#index', as: 'start'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
