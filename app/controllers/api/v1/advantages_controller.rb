module Api
  module V1
    class AdvantagesController < BaseController
      def index
        advantages = Advantage.includes(:parameters, :requirements).all
        render json: advantages
      end
    end
  end
end
