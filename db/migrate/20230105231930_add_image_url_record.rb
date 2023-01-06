class AddImageUrlRecord < ActiveRecord::Migration[6.1]
  def change
    add_column :records, :image_url, :string
  end
end
