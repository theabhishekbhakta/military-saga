const { z } = require("zod");

// Creating an object schema
const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(7, { message: "Email must be atleast of 7 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be atleast of 6 characters" })
        .max(100, { message: "Password cannot exceed 100 characters" }),
});

const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(100, { message: "Name must not be more than 100 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be atleast of 10 digits" })
        .max(15, { message: "Phone must not be more than 15 digits" }),
});

module.exports = { signupSchema, loginSchema };