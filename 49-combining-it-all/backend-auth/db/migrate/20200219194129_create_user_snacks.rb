class CreateUserSnacks < ActiveRecord::Migration[6.0]
  def change
    create_table :user_snacks do |t|
      t.references :user, null: false, foreign_key: true
      t.references :snack, null: false, foreign_key: true

      t.timestamps
    end
  end
end
