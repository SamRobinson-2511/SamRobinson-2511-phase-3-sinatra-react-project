class Review < ActiveRecord::Base
    belongs_to :collector
    belongs_to :record


end