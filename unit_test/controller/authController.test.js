const mongoose = require("mongoose");
const request = require("supertest");
const dotenv = require('dotenv')
const app = require("../../app");
dotenv.config()

let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtdWVsIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2OTI4OTIyODd9.GYTdNAxpi6eHcvfTx6J38YcSTlnL3fqENgS_iIbtlpE'
let tokenApprover = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBkb2UiLCJyb2xlIjoiYXBwcm92ZXIiLCJpYXQiOjE2OTI3OTUxMzJ9.fvy9bMxTuLJnmDs2FLuDihFsOHs8OHMHvFejxo6WVzY'
let idTrx = '64e77d33bd991a02ce7dbe45'

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});


afterAll( async () => {
  await mongoose.disconnect();
})


describe("GET /api/auth",  () => {
  it("[POSITIVE] should return all users", async () => {
    const res = await request(app).get("/api/auth");
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /api/auth/register", () => {
  it("[POSITIVE] should register user with APPROVER role", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "tes jest "+ uniqueId,
      role: '1',
      password: "gadgadasvara1506",
    });
    expect(res.statusCode).toBe(200);
  });
});

describe("POST /api/auth/login", () => {
  it("[POSITIVE] should login user with APPROVER role", async () => {
    const res = await request(app).post("/api/auth/login").send({
      name: "tes jest",
      password: "gadgadasvara1506",
    });
    expect(res.statusCode).toBe(200);
  });
});

describe('PUT: update status trx id with REJECT status', function() {
  test('[POSITIF It should update trx status and return response 200.', function() {
      return request(app)
          .put('/api/approval/transaction/64e77d33bd991a02ce7dbe45')
          .set('Authorization', 'Bearer '+ tokenApprover)
          .send({
            status: 'reject'
          })
          .expect(200);
  });
});

describe("POST /api/transaction", () => {
  it("[POSITIVE] should post transfer request with APPROVER role", async () => {
   
    const res = await request(app).post("/api/transaction")
    .set('Authorization', 'Bearer '+ token)
    .send({
      trxName: 'tes transaksi '+ uniqueId,
      trxDetail: "tes jest",
      sender: "tes jest",
      recipient: "tes jest",
      amount: 20000,
    });
    expect(res.statusCode).toBe(200);
  });
});