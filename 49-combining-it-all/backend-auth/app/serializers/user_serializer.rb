class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :super_private_banking_info, :owned_snacks

  def owned_snacks
    self.object.user_snacks.map do |user_snack|
      SnackSerializer.new(user_snack.snack).as_json.merge({user_snack_id: user_snack.id})
    end
  end

end
