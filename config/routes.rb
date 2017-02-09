Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
  get '/user/:id' => 'user#index', as: 'user_path'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
end
