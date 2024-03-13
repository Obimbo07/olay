class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :phone, :email, :created_at
end
