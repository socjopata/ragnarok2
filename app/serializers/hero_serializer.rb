class HeroSerializer < ActiveModel::Serializer
  attributes :id, :name, :parameters, :virtues

  def parameters
    object.parameters.map do |parameter|
      ::ParameterSerializer.new(parameter).attributes
    end
  end

  def virtues
    object.virtues.map do |virtue|
      ::VirtueSerializer.new(virtue).attributes
    end
  end
end
