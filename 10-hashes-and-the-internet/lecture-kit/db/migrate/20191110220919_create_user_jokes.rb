class CreateUserJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_jokes do |t|
      # what should be here?!

      t.timestamps
    end
  end
end
