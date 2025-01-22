import { Document, Schema, model, Types } from "mongoose";

interface IPlaylist extends Document {
  name: string;
  description?: string;
  creator: Types.ObjectId;
  videos: Types.ObjectId[];
  visibility: "public" | "private";
  createdAt: Date;
}
const PlaylistSchema = new Schema<IPlaylist>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
  },
  {
    timestamps: true,
  }
);

const Playlist = model<IPlaylist>("Playlist", PlaylistSchema);
export default Playlist;
