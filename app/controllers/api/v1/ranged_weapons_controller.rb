module Api
  module V1
    class RangedWeaponsController < BaseController
      def index
        ranged_weapons = RangedWeapon.includes(:parameters, :requirements).all
        render json: ranged_weapons
      end
    end
  end
end
