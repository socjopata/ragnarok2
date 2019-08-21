class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :parameters

  def parameters
    object.parameters.map do |parameter|
      ::ParameterSerializer.new(parameter).attributes
    end
  end
end
