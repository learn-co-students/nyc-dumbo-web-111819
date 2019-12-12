Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/universes", to: "universes#index", as: "universes"
  get "/universes/:id", to: "universes#show", as: "universe"

  get "/universes/:id/destroy_its_planets", to: "universes#blow_em_up", as: "blow_em_up"

  get "/beef", to: "whatever#hmm"

end
