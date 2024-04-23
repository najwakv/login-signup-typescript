import mongoose, { Schema, model } from "mongoose";

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    password: string,
    confirmPassword: string,
    contactMode: string,
    email: string,
}

export const UserSchema = new Schema<User>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true },
        confirmPassword: { type: String, required: true },
        contactMode: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        
    },
    {
        timestamps: true,
    }
);

export const UserModel = model<User>("user", UserSchema);