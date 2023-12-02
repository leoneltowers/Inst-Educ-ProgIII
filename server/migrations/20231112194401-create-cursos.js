import mongodb from 'mongodb';

const { ObjectId } = mongodb;

const initialCursos = [

  {
    _id: new ObjectId("6560132507a5471c0a980c06"),
    nombre: "Robototica",
    comisión: "608",
    año: "Primero",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },

  {
    _id: new ObjectId("6560141e07a5471c0a980c0e"),
    nombre: "Química y química aplicada",
    comisión: "607",
    año: "Segundo",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },
  {
    _id: new ObjectId("65601d4407a5471c0a980c8b"),
    nombre: "Informatica",
    comisión: "601",
    año: "Segundo",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },

  {
    _id: new ObjectId("6561069c94933697904f48cb"),
    nombre: "Física y fisica aplicada",
    comisión: "602",
    año: "Tercero",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },

  {
    _id: new ObjectId("65610efc94933697904f494c"),
    nombre: "Física y Matematica aplicada",
    comisión: "603",
    año: "Tercero",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },

  {
    _id: new ObjectId("65628ded76dd001076606340"),
    nombre: "Profesorado en Disciplina",
    comisión: "605",
    año: "Primero",
    materias: [new ObjectId("000000000000000000000000"),
    new ObjectId("000000000000000000000001"),
    new ObjectId("000000000000000000000002"),
    ],
    alumnos: [
      new ObjectId("6541a375129b7254d3569aa7"),
      new ObjectId("6541a375129b7254d3569aa7"),
    ],
    __v: 0,
  },

  


];

export async function up(db, client) {
  await db.collection('cursos').insertMany(initialCursos
  );
}

export async function down(db, client) {
  await db.collection('cursos').deleteMany({
    _id: {
      $in: initialCursos.map((curso) => curso._id),
    },
  });
}
