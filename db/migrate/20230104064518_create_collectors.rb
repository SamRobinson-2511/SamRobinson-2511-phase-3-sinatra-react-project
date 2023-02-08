class CreateCollectors < ActiveRecord::Migration[6.1]
  def change
    create_table :collectors do |t|
      t.string :name
      t.string :user_name
      t.string :email
      t.string :phone
      t.integer :zip_code
      t.timestamps 
    end
  end
end

