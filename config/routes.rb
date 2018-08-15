Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/melbourne_traffic' => 'melbourne_vehicle_traffic#index'
end
