module Api
  module V1
    class HeroesController < BaseController
      def index
        heroes = Hero.includes(:parameters, :virtues).all
        render json: heroes
      end
    end
  end
end
