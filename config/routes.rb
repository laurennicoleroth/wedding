Rails.application.routes.draw do
  resources :guests
  root 'home#index'
end
