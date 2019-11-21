module Api
  module V1
    class ImplantsController < BaseController
      def index
        implants = Implant.includes(:parameters, :requirements).all
        render json: implants
      end
    end
  end
end
