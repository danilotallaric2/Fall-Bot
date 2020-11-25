const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");


module.exports = {
    name: 'gif',
    description: 'Search a gif on giphy',
    category: 'Search',
    usage: 'f!gif <gif_name>',
    aliases: ['giphy'],
    run: async (client, message, args) => {

        if(message.channel.nsfw === false) {
          return message.channel.send("This Channel isn't marked NSFW!");
        }

        if (args.length === 0) {
            message.channel.send('No Seacrh terms!')
            return;
          }
          if (args.length === 1) {
            term = args.toString()
          } else {
            term = args.join(" ");
          }
          giphy.search(term).then(function (res) {

            let id = res.data[0].id
            let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
            const embed = {
              "color": 3066993,
              "timestamp": new Date(),
              "footer": {
                "icon_url": "https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif",
                "text": "Powered by Giphy"
              },
              "image": {
                "url": msgurl
              },
              "fields": [
                {
                  "name": "Search Term",
                  "value": "`" + term + "`",
                  "inline": true
                },
                {
                  "name": "Page URL",
                  "value": "[Giphy](" + res.data[0].url + ")",
                  "inline": true
                }
              ]
            };
            message.channel.send({ embed });
        }); 
    }
}