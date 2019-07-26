module Api
  module V1
    class HerosController < BaseController
      def index
        heros = Hero.all
        render json: heros.to_json
      end
    end
  end
end
