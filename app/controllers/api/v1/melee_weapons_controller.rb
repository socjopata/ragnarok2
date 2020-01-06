module Api
  module V1
    class MeleeWeaponsController < BaseController
      def index
        melee_weapons = MeleeWeapon.includes(:parameters, :requirements).all
        render json: melee_weapons
      end
    end
  end
end
