import { ObjectId } from 'mongodb';

const initialRoles = [
  {
    _id: new ObjectId('653b073550a96710dbbee044'),
    name: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new ObjectId('653b073550a96710dbbee045'),
    name: 'profesor',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: new ObjectId('653b073550a96710dbbee046'),
    name: 'alumno',
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
