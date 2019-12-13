class Hexeri < ApplicationRecord
  has_many :requirements, as: :entity
end
