require 'dotenv/load'
require 'oauth2'
require 'json'

client = OAuth2::Client.new(ENV['CLIENT_ID'], ENV['CLIENT_SECRET'], site: 'https://oauth.battle.net', token_url: '/token')
token = client.client_credentials.get_token
response = token.get('https://us.api.blizzard.com/hearthstone/cards', params: { set: 'battlegrounds', gameMode: 'battlegrounds', type: 'minion', locale: 'ja_JP' })
data = JSON.parse(response.body)
puts "Total cards: #{data['cards'].length}"
buddies = data['cards'].select { |card| card['collectible'] == 0 && card['cardSetId'] == 1453 }
puts "Buddies: #{buddies.length}"
buddies.each { |b| puts "#{b['name']}: #{b['text']}" }