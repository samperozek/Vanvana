Rails.application.routes.draw do
  resources :vans
  resources :dealers
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post   "/login", to:"session#create"
  get    "/userInSession", to:"session#get_logged_in_user" 
  delete "/logout", to:"session#destroy"
end
