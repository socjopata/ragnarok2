class Hero < ApplicationRecord
  has_many :parameters, as: :entity
  has_many :main_parameters, -> { where(type: "MainParameter") }, as: :entity
  has_many :secondary_parameters, -> { where(type: "SecondaryParameter") }, as: :entity
  has_many :virtues, inverse_of: :hero
end
