import { ObjectId } from 'mongodb';

const initialRoles = [
  {
    _id: new ObjectId('000000000000000000000000'),
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new ObjectId('000000000000000000000001'),
    name: 'client',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function up(db, client) {
  await db.collection('roles').insertMany(initialRoles);
}

export async function down(db, client) {
  await db.collection('roles').deleteMany({
    _id: {
      $in: initialRoles.map((role) => role._id),
    },
  });
}