Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
  get '/user/:id' => 'user#index', as: 'user_path'
end
