require 'dotenv/load'
require 'oauth2'
require 'json'

client = OAuth2::Client.new(ENV['CLIENT_ID'], ENV['CLIENT_SECRET'], site: 'https://oauth.battle.net', token_url: '/token')
token = client.client_credentials.get_token
response = token.get('https://us.api.blizzard.com/hearthstone/cards', params: { set: 'battlegrounds', gameMode: 'battlegrounds', type: 'hero', locale: 'ja_JP' })
data = JSON.parse(response.body)
puts "Total heroes: #{data['cards'].length}"
heroes = data['cards']
File.write('_data/heroes.json', JSON.pretty_generate(heroes))
puts "Heroes saved to _data/heroes.json"