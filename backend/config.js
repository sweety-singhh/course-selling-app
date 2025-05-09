import dotenv  from "dotenv";
dotenv.config();
const JWT_USER_PASSWORD= process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD= process.env.JWT_ADMIN_PASSWORD;
// const STRIPE_SECRET_KEY =
// "sk_test_51RMhRw4cEytmVpwER6HCJa8XNZ1dp6NLT6doC79Arv1Qyb7b3VjvW3wxvbrZE0DHbU3CT3sJkWwis9Jl9hb6BPvE00KPijV0KR"

export default {
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY
};