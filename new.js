// User Schema
const userSchema = {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: 'default-avatar.png'
    },
    subscribers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    subscribedTo: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
  
  // Video Schema
  const videoSchema = {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    views: {
      type: Number,
      default: 0
    },
    visibility: {
      type: String,
      enum: ['public', 'private', 'unlisted'],
      default: 'public'
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    tags: [{
      type: String,
      trim: true
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
  
  // Comment Schema
  const commentSchema = {
    content: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    replies: [{
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      content: {
        type: String,
        required: true
      },
      likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
      }],
      createdAt: {
        type: Date,
        default: Date.now
      }
    }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
  
  // Playlist Schema
  const playlistSchema = {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    videos: [{
      type: Schema.Types.ObjectId,
      ref: 'Video'
    }],
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  };
  
  // Watch History Schema
  const watchHistorySchema = {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
      required: true
    },
    watchedAt: {
      type: Date,
      default: Date.now
    },
    watchedDuration: {
      type: Number,
      default: 0
    }
  };