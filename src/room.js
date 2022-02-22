let roomData = {
  objects: {
    computer: {
      look: "It's a computer with that flying toaster screensaver.",
      take: "That computer won't fit in your inventory.",
      use: div => {
        if (roomData.note.hasBeenTaken) {
          div.styles.background = `url("../src/assets/img/office/desk_01.png")`;
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
      look: "Wait, people still use landlines?",
      take: "That phone definitely doesn't belong to you.",
      use: "You pick up the handset and talk to the nice dialtone for a while.",
      speak:
        "You pick up the handset and talk to the nice dialtone for a while."
    },
    poster: {
      look: "This person obviously wants a better job.",
      take: "That phone definitely doesn't belong to you.",
      use: "You pick up the handset and talk to the nice dialtone for a while.",
      speak:
        "You pick up the handset and talk to the nice dialtone for a while."
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
      use: "You pick up the handset and talk to the nice dialtone for a while.",
      speak:
        "You pick up the handset and talk to the nice dialtone for a while."
    }
  }
};

export default roomData;
