class Hero < ApplicationRecord
  has_many :parameters, inverse_of: :hero
  has_many :main_parameters, -> { where(type: "MainParameter") }
end