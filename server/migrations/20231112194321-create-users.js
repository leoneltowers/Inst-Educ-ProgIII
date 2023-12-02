import mongodb from 'mongodb';

const { ObjectId } = mongodb;

const initialUsers = [
  {
    _id: new ObjectId('65419f9b129b7254d3569aa3'),
    email: 'admin@gmail.com',
    password: '$2a$10$nG/DtpVp9VvF5LuyU16E9OOUedxh8jJoAy49w/psmJYrCFPvy81Nm', // Password1
    firstName: 'Leonel',
    lastName: 'Torres',
    roles: [
       new ObjectId('653b073550a96710dbbee044')
      
    ], // Admin
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    _id: new ObjectId('6541a625129b7254d3569ad4'),
    email: 'profesor@gmail.com',
    password: '$2a$10$0nzIrMdwJ2XIeVwVZxIx8O5lyt8tbfOlje5CsPVw9Npq85oOe5zdG', 
    firstName: 'Pepe',
    lastName: 'Figueroa',
    roles: [
      
       new ObjectId('653b073550a96710dbbee045')
      
    ], // Profesor
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    _id: new ObjectId('000000000000000000000000'),
    email: 'alumno@gmail.com',
    password: '$2a$10$zZkOcpDBl4r48dsjM3bMO.SI5UcsB9ZoW7zf5At9vOHuNtSxzARfy', 
    firstName: 'Gaston',
    lastName: 'Belgrano',
    roles: [
    
        new ObjectId('653b073550a96710dbbee046')
      
    ], // Alumno
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    _id: new ObjectId('000000000000000000000001'),
    email: 'alumno1@gmail.com',
    password: '$2a$10$zZkOcpDBl4r48dsjM3bMO.SI5UcsB9ZoW7zf5At9vOHuNtSxzARfy', 
    firstName: 'Cristian',
    lastName: 'Mejia',
    roles: [
      
      new ObjectId('653b073550a96710dbbee046')
      
    ], // Alumno
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },

  {
    _id: new ObjectId('000000000000000000000002'),
    email: 'alumno2@gmail.com',
    password: '$2a$10$zZkOcpDBl4r48dsjM3bMO.SI5UcsB9ZoW7zf5At9vOHuNtSxzARfy', 
    firstName: 'Ayelen',
    lastName: 'Figueroa',
    roles: [
      
       new ObjectId('653b073550a96710dbbee046')
      
    ], // Alumno
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
  {
    _id: new ObjectId('000000000000000000000003'),
    email: 'alumno3@gmail.com',
    password: '$2a$10$zZkOcpDBl4r48dsjM3bMO.SI5UcsB9ZoW7zf5At9vOHuNtSxzARfy', 
    firstName: 'Facundo',
    lastName: 'Abalos',
    roles: [
      
      new ObjectId('653b073550a96710dbbee046')
      
    ], // Alumno
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },

  {
    _id: new ObjectId('000000000000000000000004'),
    email: 'alumno4@gmail.com',
    password: '$2a$10$zZkOcpDBl4r48dsjM3bMO.SI5UcsB9ZoW7zf5At9vOHuNtSxzARfy', 
    firstName: 'Pepe',
    lastName: 'Muller',
    roles: [
      
      new ObjectId('653b073550a96710dbbee046')
      
    ], // Alumno
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
  },
];

export async function up(db, client) {
  await db.collection('users').insertMany(initialUsers);
}

export async function down(db, client) {
  await db.collection('users').deleteMany({
    _id: {
      $in: initialUsers.map((user) => user._id),
    },
  });
}
