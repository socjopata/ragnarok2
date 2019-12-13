module Api
  module V1
    class HexerisController < BaseController
      def index
        hexeris = Hexeri.includes(:requirements).all
        render json: hexeris
      end
    end
  end
end
