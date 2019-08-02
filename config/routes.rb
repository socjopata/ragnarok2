Rails.application.routes.draw do
  root to: 'react_app#index'

  namespace :api do
    namespace :v1 do
      resources :heros, only: [:index]
    end
  end
  get '*path' => redirect('/') #redirect everything to "home". This is basically for hard refresh of the current page
end
