Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
  get '/users/:id' => 'user#index', as: 'user'
  get '/user/new' => 'user#new', as: 'new_user'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#destroy', as: 'logout'
  post '/sessions' => 'sessions#create'
end
