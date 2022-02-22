export default roomData = {
  objects: {
    computer: {
      look: "It's a computer with that flying toaster screensaver.",
      take: "That computer won't fit in your inventory.",
      use:
        "The computer is password protected (and isn't showing the toasters anymore.) :(",
      speak: "The computer seems indifferent to your thoughts.",
    },
    books: {
        look: "Looks like this person is a nerd, they've got 3 programming books and 'The Visual Display Of Quantitative Information', whatever that is.",
        take: "If you want to take books, visit the library.",
        use: () => {
            roomData.objects.computer.use = () => {
                // Todo.
                return "The computer seems to be able to control the doors?"
            }
        },
        speak: "The computer seems indifferent to your thoughts.",
      },
    phone: {
      look: "Wait, people still use landlines?",
      take: "That phone definitely doesn't belong to you.",
      use: "You pick up the handset and talk to the nice dialtone for a while.",
      speak: "You pick up the handset and talk to the nice dialtone for a while.",
      },
    }
  },
};
