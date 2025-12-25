require 'openai'

module Jekyll
  class AIProcessor < Generator
    def generate(site)
      return unless ENV['OPENAI_API_KEY']

      client = OpenAI::Client.new(access_token: ENV['OPENAI_API_KEY'])
      site.posts.docs.each do |post|
        content = post.content
        response = client.chat(parameters: {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: "Summarize this article in 50 words: #{content}" }]
        })
        summary = response.dig("choices", 0, "message", "content")
        post.data['summary'] = summary.strip if summary
      end
    end
  end
end