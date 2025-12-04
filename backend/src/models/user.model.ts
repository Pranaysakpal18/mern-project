// import { Schema, model, Document,HookNextFunction } from "mongoose";
// import bcrypt from "bcryptjs";

// // TypeScript Interface
// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   comparePassword(candidatePassword: string): Promise<boolean>;
// }

// // Schema
// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// // Password Hashing Middleware
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Password Compare Method
// userSchema.methods.comparePassword = async function(candidatePassword: string) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// export const User = model<IUser>("User", userSchema);




import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

// TypeScript Interface (User type)
export interface IUser extends Document {
name: string;
email: string;
password: string;
age?: number;
comparePassword(candidatePassword: string): Promise<boolean>;
}

// Mongoose Schema
const userSchema = new Schema<IUser>(
{
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
age: { type: Number }, // Optional
},
{ timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function () {
if (!this.isModified("password")) return;

const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
});

// Compare Password Method for Login
userSchema.methods.comparePassword = async function (candidatePassword: string) {
return await bcrypt.compare(candidatePassword, this.password);
};

export const User = model<IUser>("User", userSchema);
