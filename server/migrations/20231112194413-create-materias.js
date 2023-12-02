import mongodb from 'mongodb';

const { ObjectId } = mongodb;

const initialMaterias = [
  
    {
      _id:  new ObjectId('000000000000000000000000'),
      nombre: "Analisis Matematico I",
      horario: "1800",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },

    {
      _id:  new ObjectId('000000000000000000000001'),
      nombre: "Programacion I",
      horario: "1900",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },

    {
      _id:  new ObjectId('000000000000000000000002'),
      nombre: "Fisica I",
      horario: "2000",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },
    {
      _id:  new ObjectId('000000000000000000000003'),
      nombre: "Ingles I",
      horario: "2100",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },
    {
      _id:  new ObjectId('000000000000000000000004'),
      nombre: "Algebra I",
      horario: "2200",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },
    {
      _id:  new ObjectId('000000000000000000000005'),
      nombre: "Sistemas I",
      horario: "2230",
      profesor:  new ObjectId('65419f9b129b7254d3569aa3'),      
       
      __v: 0,
    },
  
];

export async function up(db, client) {
  await db.collection('materias').insertMany(initialMaterias);
}

export async function down(db, client) {
  await db.collection('materias').deleteMany({
    _id: {
      $in: initialMaterias.map((materia) => materia._id),
    },
  });
}
