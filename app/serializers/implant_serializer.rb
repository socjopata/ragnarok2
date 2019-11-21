class ImplantSerializer < ActiveModel::Serializer
  attributes :id, :name, :internal_name, :description, :construction, :neurostability_cost, :money_cost, :kind,
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
