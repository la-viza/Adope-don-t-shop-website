
      function adopt() {
        let name = prompt("What is your name?");
        let email = prompt("What is your email address?");
        let pet = prompt("Are you looking for a pet?");
        if (pet === "yes") {
          alert(
            "Congrats, " + name + "! We will contact you soon" + " 🐶" + " 🐱"
          );
        } else {
          alert("No worries, " + name + "! Maybe, one day" + " 🐶" + " 🐱");
        }
      }

      let button = document.querySelector(".AdoptNow");
      button.addEventListener("click", adopt);
