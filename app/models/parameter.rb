class Parameter < ApplicationRecord
  belongs_to :entity, polymorphic: true
  validates :name, uniqueness: { scope: [:entity_id, :entity_type] }
end
