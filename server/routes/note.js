const note = require("express").Router();

// Dummy list of notes for now.
const Notes = [
  {
    NoteID: "marty",
    Title: "Marty McFly",
    Desc:
      'Martin Seamus "**Marty**" McFly is the son of George McFly and Lorraine Baines McFly. Marty travels between the past and the future, encountering his ancestors and descendants. Marty and his friend Doc Brown help restore the space-time continuum while encountering **Biff Tannen** (or members of the Tannen clan) at various points in time.',
    User: "Mudassar"
  },
  {
    NoteID: "emmet",
    Title: 'Emmett "Doc" Brown',
    Desc:
      'Doctor **Emmett** Lathrop "Doc" **Brown** is the inventor of the DeLorean time machine. At various points in time, Doc helps Marty restore the space-time continuum and reverse the changes that were caused by **time travel**.\n\n![Emmet Brown](https://i.imgur.com/61E2wTcm.jpg)',
    User: "Praveen"
  },
  {
    NoteID: "biff",
    Title: "Biff Tannen",
    Desc:
      "Biff Howard Tannen is the main antagonist of the first 2 films, and a local bully who harassed George McFly and managed to alter history in the second film. He comes from a long line of bullies in Hill Valley, most of whom harassed members of the McFly family. Biff is also a descendant of Buford Tannen (also portrayed by Wilson), who is one of **Hill Valley's** outlaws during the 1880s.",
    User: "Mudassar"
  },
  {
    NoteID: "ned",
    Title: "Ned Stark",
    Desc:
      "Eddard Stark is a fictional character in the 1996 fantasy novel A Game of Thrones by **George R. R. Martin**, and **Game of Thrones**, HBO's adaptation of Martin's A Song of Ice and Fire series. In the storyline, Ned is the lord of Winterfell, an ancient fortress in the North of the fictional continent of Westeros.",
    User: "Mishkat"
  }
];

note.get("/", (req, res) => {
  res.json(Notes);
});
note.post("/", (req, res) => {
  const { NoteID, Title, Desc, User } = req.body;
  if (Notes.find(n => n.NoteID === NoteID)) {
    res.status(409).json({
      Error: true,
      Success: false,
      Message: "Note ID already taken!"
    });
  } else {
    Notes.push({ NoteID, Title, Desc, User });
    res.status(201).json({
      Error: false,
      Success: true,
      Message: `Note ${Title} created successfully!`
    });
  }
  res.json({ NoteID, Title, Desc, User });
});

module.exports = note;
