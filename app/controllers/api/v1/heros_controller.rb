module Api
  module V1
    class HerosController < BaseController
      def index
        heros = Hero.includes(:parameters).all
        render json: heros
      end
    end
  end
end
