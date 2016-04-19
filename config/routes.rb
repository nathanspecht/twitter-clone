Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#root'

  resources :tweets, only: [:index] do
    collection do
      get :auth_string
    end
  end

  resources :users, only: [] do
    collection do
      get :oauth_token
      get :sign_in_with_twitter
    end
  end
end
