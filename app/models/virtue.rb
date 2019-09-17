class Virtue < ApplicationRecord
  belongs_to :hero, inverse_of: :virtues
  has_many :parameters, as: :entity
  has_many :main_parameters, -> { where(type: "MainParameter") }, as: :entity
  has_many :secondary_parameters, -> { where(type: "SecondaryParameter") }, as: :entity
  has_many :virtual_parameters, -> { where(type: "VirtualParameter") }, as: :entity
  has_many :auxiliary_parameters, -> { where(type: "AuxiliaryParameter") }, as: :entity
end
