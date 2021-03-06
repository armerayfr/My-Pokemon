import Swal from "sweetalert2";

class Popup {
  successResponse(text) {
    Swal.fire(text);
  }

  failedResponse(text) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }

  async rename(str) {
    const { value: text } = await Swal.fire({
      title: `change your pokemon nickname`,
      text: `current nickname: ${str}`,
      padding: "3em",
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg`,
      color: "#716add",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image",
      backdrop: `
                        rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat`,
      input: "text",
      inputPlaceholder: "Type your nickname pokemon here...",
      inputAttributes: {
        "aria-label": "Type your nickname pokemon here...",
      },
      showCancelButton: true,
    });

    if (text) {
      return text;
    } else {
      return str;
    }
  }

  async renameResponse(str, payload) {
    const { value: text } = await Swal.fire({
      title: `${payload.name}!`,
      text: `${str}`,
      imageUrl: `${payload.sprites.other.home.front_default}`,
      padding: "3em",
      color: "#716add",
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image",
      backdrop: `
                        rgba(0,0,123,0.4)
                        url("/images/nyan-cat.gif")
                        left top
                        no-repeat`,
      input: "text",
      inputLabel: "Gotcaa!!!",
      inputPlaceholder: "Type your nickname pokemon here...",
      inputAttributes: {
        "aria-label": "Type your nickname pokemon here...",
      },
      showCancelButton: true,
    });

    if (text) {
      return text;
    } else {
      return payload.name;
    }
  }
}

export default new Popup();
