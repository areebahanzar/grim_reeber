import pkg from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const { connect, Schema, model, connection } = pkg;

// 1. Connect to MongoDB Atlas using your SRV string
connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ SUCCESS: Connected to MongoDB Atlas!');
    runTest();
  })
  .catch(err => {
    console.error('❌ ERROR: Could not connect to MongoDB Atlas.');
    console.error(err);
    process.exit(1);
  });

// 2. Define a temporary test schema and model
const TestSchema = new Schema({ name: String, createdAt: Date });
const TestModel = model('TestCollection', TestSchema);

async function runTest() {
  try {
    // 3. Write data to the database
    console.log('Sending data to MongoDB...');
    const testDoc = await TestModel.create({ 
      name: 'MERN Connection Test Successful!', 
      createdAt: new Date() 
    });
    console.log('✅ SUCCESS: Document saved to database:', testDoc);

    // 4. Read data back from the database
    const foundDoc = await TestModel.findById(testDoc._id);
    console.log('✅ SUCCESS: Document read back from database:', foundDoc);

    // 5. Clean up and close connection
    await TestModel.deleteOne({ _id: testDoc._id });
    console.log('兵 Cleaned up test data.');
    
    connection.close();
    console.log('Connection safely closed. Everything is working perfectly!');
  } catch (error) {
    console.error('❌ ERROR during database operations:', error);
    connection.close();
  }
}
