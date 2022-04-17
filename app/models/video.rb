class Video < ApplicationRecord
  has_one_attached :clip
  validates_presence_of :description, :song_name, :clip
end