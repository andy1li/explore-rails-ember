class SerializableCourse < JSONAPI::Serializable::Resource
  type 'course'
  attribute :name
  attribute :description
  attribute :stages_count
  attribute :icon_src
  attribute :is_beta
  attribute :is_free
  attribute :created_at
  attribute :updated_at
end
