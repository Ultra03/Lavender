exports.run = (client, message, args) => {
    message.channel.send({embed: {
        color: 3447003,
        author: {
            name: client.user.username,
            icon_url: client.user.avatartURl
        },
        title: "Miku-Chan - Help",
        url: "http://github.com/Miku-Chan-Devs/Miku-Chan/wiki/Commands",
        description: `Miku-Chan's commands are as follows. The "" + config.prefix + is ${config.prefix}.`,
        fields: [
        {
            name: "" + config.prefix + "8ball",
            value: "It's an 8ball..."
        },
        {
            name: "" + config.prefix + "help, m!h, m!cmds",
            value: "See the commands that Miku-Chan understands"
        },
        {
            name: "" + config.prefix + "icup",
            value: "I C U P"
        },
        {
            name: "" + config.prefix + "about",
            value: "Learn about Miku-Chan"
        },
        {
            name: "" + config.prefix + "google",
            value: "Google what's after the command"
        },
        {
            name: "" + config.prefix + "pocketmonster",
            value: "Search the Pocket Monster Directory"
        },
        {
            name: "" + config.prefix + "tf, m!uf",
            value: "Animate a tableflip and un-flipping a table"
        },
        {
            name: "" + config.prefix + "botisdead",
            value: "Get a Link to the Miku-Chan status page"
        },
        {
            name: "" + config.prefix + "ping, m!ding",
            value: "Get your ping, or just ding"
        },
        {
            name: "" + config.prefix + "join",
            value: "Join the Current Voice Channel"
        },
        {
            name: "" + config.prefix + "add",
            value: "Add to the Queue"
        },
        {
            name: "" + config.prefix + "queue",
            value: "See the Queue"
        },
        {
            name: "" + config.prefix + "play",
            value: "Play a song from YouTube"
        },
        {
            name: "" + config.prefix + "crypto",
            value: "Add a space and add the crypto abbreviation"
        }],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "Use those Commands Now"
        }
    }});
}