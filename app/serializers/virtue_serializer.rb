class VirtueSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :parameters

  def parameters
    object.parameters.map do |parameter|
      ::ParameterSerializer.new(parameter).attributes
    end
  end
end
