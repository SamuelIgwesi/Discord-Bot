require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require("discord.js");
const { ask } = require("./ai.js");
// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("message", async (message) => {
  if (message.content.substring(0, 1) === "!") {
    const prompt = message.content.substring(1); //remove the exclamation mark from the message
    const answer = await ask(prompt); //prompt GPT-3
    message.channel.send(answer); //reply to Discord with answer from GPT-3
  }
});

client.login(process.env.CLIENT_TOKEN);
