Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :heroes, only: [:index]
      resources :advantages, only: [:index]
      resources :implants, only: [:index]
      resources :hexeris, only: [:index]
      resources :melee_weapons, only: [:index]
      resources :ranged_weapons, only: [:index]
    end
  end

  root to: 'react_app#index'

  #redirect everything non-Ajax to "home". This is basically for hard refresh of the current page

  get '*path', to: redirect('/', status: 302)
end
