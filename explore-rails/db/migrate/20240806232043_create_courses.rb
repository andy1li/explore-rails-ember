class CreateCourses < ActiveRecord::Migration[7.1]
  def change
    create_table :courses, id: :string do |t|
      t.string :name
      t.string :description
      t.integer :stages_count
      t.string :icon_src
      t.boolean :is_beta
      t.boolean :is_free

      t.timestamps
    end
  end
end
