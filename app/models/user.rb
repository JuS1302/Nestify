class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one_attached :photo
  has_many :questions
  has_many :proposals
  has_many :favorite_proposals, -> { favorite }, :class_name => 'Proposal'
  has_many :favorite_packages, :source => :package, :through => :favorite_proposals
end
