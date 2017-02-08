Rails.application.routes.draw do
  get '/' => 'welcome#index', as: 'root'
end
