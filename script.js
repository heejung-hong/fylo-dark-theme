tailwind.config = {
  theme: {
    extend: {
      colors: {
        "dk-blue-100": "hsl(217, 28%, 15%)",
        "dk-blue-200": "hsl(217, 27%, 13%)",
        "dk-blue-300": "hsl(217, 53%, 9%)",
        "dk-blue-400": "hsl(217, 31%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        "lt-red": "hsl(0, 100%, 63%)",
        white: "hsl(0, 0%, 100%)",
      },
      dropShadow: {
        md: "2px 3px 6px rgba(0, 0, 0, 0.16)",
      },
      screens: {
        xl: "1440px",
      },
    },
  },
};

let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let subscribeActive = document.getElementById("subscribe");

function validateEmail() {
  if (
    !emailInput.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Error, please check your email";
    document.getElementById("subscribe").disabled = true;
    return false;
  }
  emailError.innerHTML = "";
  document.getElementById("subscribe").disabled = false;
  return true;
}
