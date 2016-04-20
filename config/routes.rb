Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#root'
  
  resource :static_pages, path: '', only: [] do
    get :login 
  end

  resources :tweets, only: [:index] 

  resource :users, only: [] do
    get  :begin_twitter_sign_in
    get  :sign_in_with_twitter
    post :logout
  end
end
