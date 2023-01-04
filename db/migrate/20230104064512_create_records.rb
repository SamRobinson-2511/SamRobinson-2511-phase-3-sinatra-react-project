class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :artist_name
      t.string :artist_first_name
      t.string :artist_last_name
      t.string :album_name
      t.string :label
      t.string :release_date
      t.string :cat_num
      t.belongs_to :collector
      t.belongs_to :store
      t.timestamps 
    end
  end
end
