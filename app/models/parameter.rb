class Parameter < ApplicationRecord
  belongs_to :hero, inverse_of: :parameters
  validates :name, uniqueness: { scope: :hero_id }
end
