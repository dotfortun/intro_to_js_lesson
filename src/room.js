let roomData = {
  objects: {
    computer: {
      look: args => {
        if (roomData.note.hasBeenTaken) {
          return "It's a computer with that flying toaster screensaver.";
        } else {
          return "Oh, the toasters are gone.";
        }
      },
      take: "That computer won't fit in your inventory.",
      use: div => {
        if (roomData.note.hasBeenTaken) {
          div.style.backgroundImage = `url("../src/assets/img/office/desk_02.png")`;
          return "The computer is no longer password protected (and isn't showing the toasters anymore.) :(";
        }
        return "The computer is password protected. :(";
      },
      speak: "The computer seems indifferent to your thoughts."
    },
    phone: {
      look: "Wait, people still use landlines?",
      take: "That phone definitely doesn't belong to you.",
      use: "You pick up the handset and talk to the nice dialtone for a while.",
      speak:
        "You pick up the handset and talk to the nice dialtone for a while."
    },
    fruit: {
      look: "Looks delicious and low-poly.",
      take: "Every time you take a piece of fruit, another replaces it.",
      use: "You chew on some fruit.  It tastes of vertices.",
      speak: "You pick up the bana and talk to the nice fruit for a while."
    },
    poster: {
      look: "This person obviously wants a better job.",
      take: "Well that's rude.",
      use: "You appreciate the poster for a while.",
      speak:
        "The poster doesn't seems to have any opinion about what you say to it."
    },
    note: {
      hasBeenTaken: false,
      look: "Those are some random letters and numbers, uh-huh.",
      take: args => {
        if (roomData.note.hasBeenTaken) {
          return "Passwords on sticky notes? Really?!";
        } else {
          roomData.note.hasBeenTaken = true;
          return "Wait, is that a password?";
        }
      },
      use: "You add a little doodle to the note.",
      speak: "The note fails to transcribe your words."
    }
  }
};

export default roomData;
