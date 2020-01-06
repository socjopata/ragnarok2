class RangedWeaponSerializer < ActiveModel::Serializer
  attributes :id, :name, :internal_name, :family, :kind, :rarity, :dmg, :accuracy, :attacks_capability, :special_rules, :money_cost,
    :parameters, :requirements

  def parameters
    object.parameters.map do |parameter|
      ::ParameterSerializer.new(parameter).attributes
    end
  end

  def requirements
    object.requirements.map do |requirement|
      ::RequirementSerializer.new(requirement).attributes
    end
  end
end
