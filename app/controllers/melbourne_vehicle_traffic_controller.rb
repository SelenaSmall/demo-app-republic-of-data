class MelbourneVehicleTrafficController < ApplicationController
  def index
    render json: MelbourneVehicleTrafficDenorm.first(10)
  end
end