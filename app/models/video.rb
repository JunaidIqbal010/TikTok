class Video < ApplicationRecord
  belongs_to :user
  has_one_attached :clip
  validates_presence_of :description, :song_name
end