Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
  
  get '/user/:id' => 'user#index', as: 'user'
  get '/user/new' => 'user#new', as: 'new_user'
  post '/user' => 'user#create'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#destroy', as: 'logout'
  post '/sessions' => 'sessions#create'

  post '/users' => 'users#create'

  get '/game/:id' => 'game#show'
end
