module.exports.generateRandomID = (userContext, events, done) => {
  let id = Math.floor(Math.random() * 10000000);
  userContext.vars.eventId = id;
  return done();
};
