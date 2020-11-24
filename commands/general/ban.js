const { MessageEmbed } = require('discord.js');


module.exports = {
    name: 'ban',
    category: 'General',
    description: 'Ban a member from the server',
    usage: 'f!ban <member>',
    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`You don't have \`BAN MEMBERS\` permission to do that!`)
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!member) return message.channel.send("Please specify a member to ban.");
        let reason;
        reason = args.slice(1).join(" ") || 'None';

        if(member) {

        let embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Banned From Server: " + message.guild.name)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setAuthor(`Action: Ban by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Banned **${member.user.username}** by **${message.author.username}**\nReason: ${reason}`)

        member.ban({ reason: reason });
        message.channel.send(embed);    
        } else {
            return message.channel.send(`I can't ban ${member.user.username}`)
        }
    }
}