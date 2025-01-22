import { Document, Schema, model, Types } from "mongoose";

interface IComment extends Document {
  content: string;
  user: Types.ObjectId;
  video: Types.ObjectId;
  likes: Types.ObjectId[];
  replies: IReply[];
  createdAt: Date;
}

interface IReply {
  user: Types.ObjectId;
  content: string;
  likes: Types.ObjectId[];
  createdAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    content: {
      type: String,
      required: true,
    },
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
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    replies: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
        likes: [
          {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        ],
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Comment = model<IComment>("Comment", CommentSchema);
export default Comment;
