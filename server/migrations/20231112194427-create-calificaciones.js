import mongodb from 'mongodb';

const { ObjectId } = mongodb;

const initialCalificaciones = [
  {
    _id: new ObjectId('000000000000000000000001'),
    alumno: new ObjectId('000000000000000000000000'),
    materia: new ObjectId('000000000000000000000000'),
    profesor: new ObjectId('000000000000000000000000'),
    nota: 9,
    __v: 0
  }, 

  {
    _id: new ObjectId('000000000000000000000002'),
    alumno: new ObjectId('000000000000000000000000'),
    materia: new ObjectId('000000000000000000000001'),
    profesor: new ObjectId('000000000000000000000001'),
    nota: 9,
    __v: 0
  }, 

  {
    _id: new ObjectId('000000000000000000000003'),
    alumno: new ObjectId('000000000000000000000000'),
    materia: new ObjectId('000000000000000000000002'),
    profesor: new ObjectId('000000000000000000000002'),
    nota: 8,
    __v: 0
  }, 

  {
    _id: new ObjectId('000000000000000000000004'),
    alumno: new ObjectId('000000000000000000000000'),
    materia: new ObjectId('000000000000000000000003'),
    profesor: new ObjectId('000000000000000000000003'),
    nota: 7,
    __v: 0
  }, 
  {
    _id: new ObjectId('000000000000000000000005'),
    alumno: new ObjectId('000000000000000000000000'),
    materia: new ObjectId('000000000000000000000004'),
    profesor: new ObjectId('000000000000000000000004'),
    nota: 7,
    __v: 0
  }, 

  //agregados adds unique profe

  {
    _id: new ObjectId('000000000000000000000006'),
    alumno: new ObjectId('000000000000000000000002'),
    materia: new ObjectId('000000000000000000000003'),
    profesor: new ObjectId('6541a625129b7254d3569ad4'),
    nota: 9,
    __v: 0
  }, 

  {
    _id: new ObjectId('000000000000000000000007'),
    alumno: new ObjectId('000000000000000000000003'),
    materia: new ObjectId('000000000000000000000002'),
    profesor: new ObjectId('6541a625129b7254d3569ad4'),
    nota: 9,
    __v: 0
  }, 

 
  
];

export async function up(db, client) {
  await db.collection('calificacions').insertMany(initialCalificaciones);
}

export async function down(db, client) {
  await db.collection('calificacions').deleteMany({
    _id: {
      $in: initialCalificaciones.map((calificacion) => calificacion._id),
    },
  });
}
