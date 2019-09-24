class RequirementSerializer < ActiveModel::Serializer
  attributes :id, :name, :check_applies_to, :value
end
