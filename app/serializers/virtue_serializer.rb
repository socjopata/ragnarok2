class VirtueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :internal_name, :parameters

  def parameters
    object.parameters.map do |parameter|
      ::ParameterSerializer.new(parameter).attributes
    end
  end
end
