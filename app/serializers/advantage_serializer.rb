class AdvantageSerializer < ActiveModel::Serializer
  attributes :id, :name, :internal_name, :description, :pd_cost, :kind, :use_again_cost, :parameters, :requirements

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
