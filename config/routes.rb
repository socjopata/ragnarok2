Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :heros, only: [:index]
    end
  end

  #redirect everything non-Ajax to "home". This is basically for hard refresh of the current page
  get '*path', to: 'react_app#index', cosntraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  root to: 'react_app#index'
end
