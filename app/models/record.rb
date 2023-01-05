class Record < ActiveRecord::Base
    has_many :reviews
    has_many :collectors, through: :reviews

end