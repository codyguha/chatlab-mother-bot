
module.exports = function (controller) {
  // this is triggered when a user clicks the send-to-messenger plugin
  controller.on('facebook_optin', function (bot, message) {
    bot.reply(message, "Hello! you used the facebook_optin");
  })

  // user said hello
  controller.hears(['hi'], 'message_received', function (bot, message) {
    bot.reply(message, "Hello!");
  });

  // user says anything else
  controller.hears('(.*)', 'message_received', function (bot, message) {
    bot.reply(message, 'you said ' + message.match[1])
  });
}
