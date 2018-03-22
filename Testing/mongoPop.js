const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/meetup');
const EventsUsersSchema = Schema({
  event_id: Number,
  user_id: [{ type: Schema.Types.ObjectId, ref: 'user' }],
});
const UsersSchema = Schema({
  _id: Schema.Types.ObjectId,
  PersonID: Number,
  id: String,
  first: String,
  last: String,
  photoURL: String,
});
const EventsUsers = mongoose.model('events_user', EventsUsersSchema);
const Users = mongoose.model('user', UsersSchema);
const getRandEvent = () => {
  return Math.ceil(Math.random() * 10000000);
};
const makeJoinQuery = (cb) => {
  const randEvent = getRandEvent();
  EventsUsers
    .find({ event_id: randEvent })
    .populate('user')
    .exec((err, event) => {
      cb(event, randEvent);
    });
};
const callback = (event, randEvent) => {
  console.log(event);
  mongoose.disconnect();
};
makeJoinQuery(callback);
