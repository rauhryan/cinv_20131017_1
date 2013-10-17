ENV['RAILS_ENV'] ||= 'production'
require File.expand_path('config/environment.rb')

puts "Rails Environment: #{Rails.env}"
