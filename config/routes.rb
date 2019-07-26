Rails.application.routes.draw do
  root to: 'react_app#index'

  namespace :api do
    namespace :v1 do
      resources :heros, only: [:index]
    end
  end
end
