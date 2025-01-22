import { Document, Schema, model, Types } from "mongoose";

interface IWatchHistory extends Document {
  user: Types.ObjectId;
  video: Types.ObjectId;
  watchedAt: Date;
  watchedDuration: number;
}

const WatchHistorySchema = new Schema<IWatchHistory>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
    watchedAt: {
      type: Date,
      default: Date.now,
    },
    watchedDuration: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const WatchHistory = model<IWatchHistory>("WatchHistory", WatchHistorySchema);
export default WatchHistory;
