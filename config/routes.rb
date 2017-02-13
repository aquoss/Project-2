Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'

  get '/users/new' => 'users#new', as: 'new_user'
  get '/users/:id' => 'users#show', as: 'user'
  post '/users' => 'users#create'

  get '/login' => 'sessions#new', as: 'login'
  get '/logout' => 'sessions#destroy', as: 'logout'
  post '/sessions' => 'sessions#create'


  get '/game/new' => 'game#new'
  get '/game/:id' => 'game#show'
  post '/games' => 'game#create'

end
