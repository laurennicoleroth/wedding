class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.text :message

      t.timestamps
    end
  end
end
