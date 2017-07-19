Rails.application.routes.draw do
  get 'users/new'

  resources :users
  root 'home#index'
end
