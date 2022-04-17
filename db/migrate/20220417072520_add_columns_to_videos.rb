class AddColumnsToVideos < ActiveRecord::Migration[7.0]
  def change
    add_column :videos, :likes, :integer, default: 0
    add_column :videos, :shares, :integer, default: 0
    add_column :videos, :comments, :integer, default: 0
    add_column :videos, :description, :text, default: ""
  end
end
