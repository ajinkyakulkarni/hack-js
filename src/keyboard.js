function Keyboard() {
  var keyPressed = 0;

  window.onkeydown = function (e) {
    // Ignore key presses if Ctrl, Alt or Cmd were held.
    // This is so the user can, for example, use Cmd + R
    // to refresh the page, or Cmd + W to close it.
    if (e.ctrlKey || e.altKey || e.metaKey) {
      return;
    }

    e.preventDefault();
    keyPressed = translateKeyCode(e.keyCode);
  };

  window.onkeyup = function (e) {
    keyPressed = 0;
  };

  function translateKeyCode(keyCode) {
    // Function Keys: F1 - F12
    if (keyCode >= 112 && keyCode <= 123) {
      return keyCode + 29;
    }

    switch (keyCode) {
      case 8:
        return 129; // Backspace
      case 13:
        return 128; // Return
      case 27:
        return 140; // Escape
      case 33:
        return 136; // Page Up
      case 34:
        return 137; // Page Down
      case 35:
        return 135; // End
      case 36:
        return 134; // Home
      case 37:
        return 130; // Left arrow
      case 38:
        return 131; // Up arrow
      case 39:
        return 132; // Right arrow
      case 40:
        return 133; // Down arrow
      case 45:
        return 138; // Insert
      case 46:
        return 139; // Delete
      default:
        return keyCode;
    }
  }

  this.get = function (addr) {
    return keyPressed;
  };

  this.set = function (addr, value) {
    throw new Error("Keyboard memory map is read-only");
  };
}
