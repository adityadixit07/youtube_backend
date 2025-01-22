import { Document, Schema, model, Types } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
  subscribers: Types.ObjectId[];
  subscribedTo: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "default.avatar.png",
    },
    subscribers: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    subscribedTo: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", UserSchema);
export default User;
