class User < ApplicationRecord
  has_many :videos, dependent: :destroy
  validates_presence_of :username
end
