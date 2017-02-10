Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'

  get '/users/:id' => 'users#show', as: 'user'
  get '/users/new' => 'users#new', as: 'new_user'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#destroy', as: 'logout'
  post '/sessions' => 'sessions#create'

  post '/users' => 'users#create'

  get '/game/:id' => 'game#show'
end
