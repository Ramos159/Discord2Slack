const { setupSClient } = require('./slackbot');
const { setupDClient } = require('./discordbot');
const { setupDB } =  require('./database');


async function main(){
  const [User,UserChannel] = await setupDB();
  console.log(User,UserChannel);
  const DClient  = setupDClient(User,UserChannel);
  setupSClient(DClient,User,UserChannel);
}

main();


// try just jamming these together in one file
// slack bot should have access to the discord bot client to send messages back
// discord bot doesnt need slack functionality so just have them together