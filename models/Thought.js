const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
//const formatDate = require('../utils/formatDate');
const dayjs = require('dayjs');
//function formatDate(createdAt)  {
  // dayjs(createdAt).format('MMM DD, YYYY [at] HH:MM')
  // };

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,     
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dayjs(timestamp).format ('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
        type: String,
        required: true,      
      },      

    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;