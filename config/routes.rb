Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'homepage/index'
    end
  end
end