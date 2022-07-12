Rails.application.routes.draw do
  
  resources :tags
  resources :expensetags
  resources :users
  resources :expenses
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  post "/new", to: "expenses#create"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/me", to: "users#show"


end
