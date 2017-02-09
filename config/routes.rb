Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
  get '/user/:id' => 'user#index', as: 'user_path'

  get '/login' => 'sessions#new'
  get '/logout' => 'sessions#destroy'
  post '/sessions' => 'sessions#create'

  post '/users' => 'users#create'

  get '/game/:id' => 'game#show'
end
