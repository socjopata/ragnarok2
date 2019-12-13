class HexeriSerializer < ActiveModel::Serializer
  attributes :id, :name, :internal_name, :description, :sophistication, :range, :casting_difficulty, :kind, :mana_cost,
    :requirements

  def requirements
    object.requirements.map do |requirement|
      ::RequirementSerializer.new(requirement).attributes
    end
  end
end
